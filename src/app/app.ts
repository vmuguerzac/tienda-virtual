import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartillaProducto } from './componentes/cartilla-producto/cartilla-producto';
import { ListaProductos } from "./componentes/lista-productos/lista-productos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda-virtual');
}
