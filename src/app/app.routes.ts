import { Routes } from '@angular/router';
import { ListaProductos } from './componentes/lista-productos/lista-productos';
import { ProductoDetalle } from './componentes/producto-detalle/producto-detalle';
import { FormProducto } from './componentes/form-producto/form-producto';
import { CarritoPagina } from './componentes/carrito-pagina/carrito-pagina';

export const routes: Routes = [
    {path: '', redirectTo: 'productos', pathMatch: 'full'},
    {path: 'productos', component: ListaProductos},
    {path: 'productos/nuevo', component: FormProducto}, // antes de :id, el router usa la primera coincidencia
    {path: 'productos/:id', component: ProductoDetalle},
    {path: 'productos/:id/editar', component: FormProducto},
    {path: 'carrito', component: CarritoPagina},
    {path: '**', redirectTo: 'productos'}

];
