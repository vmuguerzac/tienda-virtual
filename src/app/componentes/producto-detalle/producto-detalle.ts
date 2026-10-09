import { Component, OnInit, signal } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductoDataService } from '../../servicios/producto-data.service';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/Producto';

@Component({
  selector: 'app-producto-detalle',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle implements OnInit {
  producto = signal<Producto | null>(null);
  error = signal<string | null>(null);

  constructor(private route:ActivatedRoute,
    private router:Router,
    private productoService:ProductoService,
    private productoDataService:ProductoDataService,
    private carritoService:CarritoService){ }

  ngOnInit(): void {
    // Parametro de ruta: /productos/:id
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoDataService.obtenerPorId(id).subscribe({
      next: (producto) => this.producto.set(producto),
      error: () => this.error.set('El producto no existe'),
    });
  }

  precioConIGV(precio:number):string {
    return this.productoService.formatearPrecio(
      this.productoService.calcularPrecioConImpuesto(precio));
  }

  agregarAlCarrito(producto:Producto):void {
    this.carritoService.agregarProductoAlCarrito({ producto, cantidad: 1 });
  }
}
