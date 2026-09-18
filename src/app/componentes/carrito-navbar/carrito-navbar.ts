import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { map, Observable } from 'rxjs';
import { ItemCarrito } from '../../modelos/ItemCarrito';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-carrito-navbar',
  imports: [AsyncPipe],
  templateUrl: './carrito-navbar.html',
  styleUrl: './carrito-navbar.css',
})
export class CarritoNavbar {
  cantidadEnCarrito$: Observable<number>;

  constructor(private carritoService:CarritoService){
    this.cantidadEnCarrito$ = this.carritoService.items$.pipe(
      map(items=> items.length)
    )
  }

}
