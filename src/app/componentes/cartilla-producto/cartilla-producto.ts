import { Component, input, output } from '@angular/core';
import { Producto } from '../../modelos/Producto';
import { ItemCarrito } from '../../modelos/ItemCarrito';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cartilla-producto',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cartilla-producto.html',
  styleUrl: './cartilla-producto.css',
})
export class CartillaProducto {
    productoAMostrar = input.required<Producto>();
    cantidad:number = 1;
    // Producto a agregar al carrito - output
    agregarAlCarrito = output<ItemCarrito>();
  
    onAgregarAlCarrito():void {
      this.agregarAlCarrito.emit(
        {producto: this.productoAMostrar(), cantidad:this.cantidad}
      );
    }
  
}
