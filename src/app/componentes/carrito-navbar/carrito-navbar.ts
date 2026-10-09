import { Component } from '@angular/core';
import { CarritoService } from '../../servicios/carrito.service';
import { map, Observable } from 'rxjs';
import { ItemCarrito } from '../../modelos/ItemCarrito';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-carrito-navbar',
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './carrito-navbar.html',
  styleUrl: './carrito-navbar.css',
})
export class CarritoNavbar {
  cantidadEnCarrito$: Observable<number>;

  constructor(private carritoService:CarritoService, 
    private router:Router
  ){
    this.cantidadEnCarrito$ = this.carritoService.cantidadTotal$;
  }

}
