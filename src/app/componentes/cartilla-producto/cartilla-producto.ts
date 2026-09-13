import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cartilla-producto',
  imports: [],
  templateUrl: './cartilla-producto.html',
  styleUrl: './cartilla-producto.css',
})
export class CartillaProducto {
    id = input.required<number>();
    nombreProducto = input.required<string>();
    descripcion = input<string>();
    precio = input.required<number>();
    sinStock = input.required<boolean>();
    imagenProducto = input<string>();
  
  enviarMensaje():void{
    console.log("Producto se va a agregar a carrito");
  }
  
}
