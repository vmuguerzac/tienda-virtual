import { Component } from '@angular/core';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-producto-detalle',
  imports: [],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {
  precioBase = 100;
  precioFinal:string;

  constructor(private productoService:ProductoService){
    const total:number = this.productoService.calcularPrecioConImpuesto(this.precioBase);
    this.precioFinal = this.productoService.formatearPrecio(total);
  }
}
