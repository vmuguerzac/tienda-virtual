import { Component, signal } from '@angular/core';
import { Producto, ProductoRequest } from '../../modelos/Producto';
import {FormsModule} from '@angular/forms';
import { ProductoDataService } from '../../servicios/producto-data.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-producto',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-producto.html',
  styleUrl: './form-producto.css',
})
export class FormProducto {
  nuevoProducto = signal<ProductoRequest>({
    nombreProducto: '',
    descripcion: '',
    precio: 0,
    sinStock: false,
    imagenProducto: '',
    categoriaId: null,
  });
  idEditar:number | null = null; // null = crear, numero = editar
  guardando = signal(false);
  error = signal<string | null>(null);

  constructor(private productoDataService:ProductoDataService,
    private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.idEditar = Number(id);
      this.productoDataService.obtenerPorId(this.idEditar).subscribe(producto => {
        const { id: _, ...datos } = producto; // quitamos el id: viaja en la URL
        this.nuevoProducto.set(datos);
      });
    }
  }

  guardarProducto():void {
    this.guardando.set(true);
    this.error.set(null);
    const peticion = this.idEditar
      ? this.productoDataService.actualizarProducto(this.idEditar, this.nuevoProducto()) // PUT
      : this.productoDataService.agregarProducto(this.nuevoProducto());                  // POST

    peticion.subscribe({
      next: (producto) => {
        this.guardando.set(false);
        this.router.navigate(['/productos', producto.id]);
      },
      error: (err:HttpErrorResponse)=>{
        // El backend devuelve { "error": "mensaje" } en los 400
        this.error.set(err.error?.error ?? 'Error al guardar el producto');
        this.guardando.set(false);
      }
    });
  }
}
