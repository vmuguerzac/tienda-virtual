import { Component, computed, OnInit, signal } from '@angular/core';
import { CartillaProducto } from '../cartilla-producto/cartilla-producto';
import { Producto } from '../../modelos/Producto';
import { ItemCarrito } from '../../modelos/ItemCarrito';
import { ProductoDataService } from '../../servicios/producto-data.service';
import { CarritoService } from '../../servicios/carrito.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  imports: [CartillaProducto, FormsModule],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  readonly tamanioPagina = 8;
  productos = signal<Producto[]>([]);
  pagina = signal(0);
  totalPaginas = signal(0);
  cargando = signal(true);
  error = signal<string|null>(null);
  paginas = computed(() => Array.from({length: this.totalPaginas()}, (_, i) => i ));
  busqueda = '';
  
  constructor(private productoDataService:ProductoDataService,
    private carritoService:CarritoService,
    private route:ActivatedRoute,
    private router:Router)
  {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params=>{
      this.busqueda = params.get('q')??'';
      const pagina = Number(params.get('pagina')??0);
      this.cargarProductos(pagina, this.busqueda);
    });
  }

  cargarProductos(pagina:number, nombre:string):void {
    this.cargando.set(true);
    this.error.set(null);
    this.productoDataService.obtenerProductos(pagina, this.tamanioPagina, nombre).subscribe({
      next: (respuesta)=> {
        this.productos.set(respuesta.contenido);
        this.pagina.set(respuesta.pagina);
        this.totalPaginas.set(respuesta.totalPaginas);
        this.cargando.set(false);
      },
      error: (err) => {
        this.error.set("No se pudieron cargar los datos del servidor");
        this.cargando.set(false);
        console.error(err);
      }
    })
  }

  buscar():void {
    this.router.navigate([], {queryParams: {q: this.busqueda || null, pagina: null}});
  }

  agregarProductoAlCarrito(itemCarrito:ItemCarrito):void {
    this.carritoService.agregarProductoAlCarrito(itemCarrito);
  }

}
