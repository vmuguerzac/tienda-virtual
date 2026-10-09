import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-carrito-pagina',
  imports: [AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './carrito-pagina.html',
  styleUrl: './carrito-pagina.css',
})
export class CarritoPagina {
  constructor(protected carritoService:CarritoService){}
}
