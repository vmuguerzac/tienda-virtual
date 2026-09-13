import { Component } from '@angular/core';
import { CartillaProducto } from '../cartilla-producto/cartilla-producto';

@Component({
  selector: 'app-lista-productos',
  imports: [CartillaProducto],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {
  productos = [
    {
      id: 1,
      nombreProducto: "Audífonos Inalámbricos",
      descripcion: "Estos audífonos son de alta fidelidad con sonido claro.",
      precio: 199.90,
      sinStock: false,
      imagenProducto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.-9Mnt3gM1lzXw-x5JZ6begHaHa%3Fpid%3DApi&f=1&ipt=e119ecafd607b9f8b10e5822d3f608f167568caaf6ad1287428389ade920b9f8"
    },
    {
      id: 2,
      nombreProducto: "Macbook Pro m2",
      descripcion: "Laptop de apple de gran performance.",
      precio: 7000.90,
      sinStock: false,
      imagenProducto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsQA4b_YpcKQibhOEcPe8fLXr7u-S0u29CzuLVhGKaXvqh13zTXh6JVuF&s=10"
    },
    {
      id: 3,
      nombreProducto: "Galaxy tab s10",
      descripcion: "Tablet de 10 pulgadas de gran performance.",
      precio: 1200.90,
      sinStock: false,
      imagenProducto: "https://oechsle.vteximg.com.br/arquivos/ids/22378542-1000-1000/imageUrl_1.jpg?v=638948974016330000"
    }
  ]
}
