import { Component, OnInit } from '@angular/core';
import { CartillaProducto } from '../cartilla-producto/cartilla-producto';
import { Producto } from '../../modelos/Producto';
import { ItemCarrito } from '../../modelos/ItemCarrito';
import { ProductoDataService } from '../../servicios/producto-data.service';
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-lista-productos',
  imports: [CartillaProducto],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  productos:Producto[] = []
  carrito:ItemCarrito[] = []

  constructor(private productoDataService:ProductoDataService,
    private carritoService:CarritoService){

  }

  ngOnInit(): void {
    this.productos = this.productoDataService.obtenerProductos();
  }

  agregarProductoAlCarrito(itemCarrito:ItemCarrito):void {
    this.carritoService.agregarProductoAlCarrito(itemCarrito);
  }

}
