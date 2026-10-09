import { Injectable } from '@angular/core';
import { Producto, ProductoRequest } from '../modelos/Producto';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Pagina } from '../modelos/Pagina';

@Injectable({
  providedIn: 'root',
})
export class ProductoDataService {
  private readonly baseurl = `${environment.apiUrl}/productos`;

  constructor(private http:HttpClient){ }

  //GET /api/productos?page=0&size=8&nombre=....
  obtenerProductos(pagina:number, tamanio:number, nombre=''):Observable<Pagina<Producto>>{
    let params = new HttpParams().set('page', pagina).set('size', tamanio);
    if(nombre){
      params = params.set('nombre', nombre);
    }
    return this.http.get<Pagina<Producto>>(this.baseurl, {params});
  }

  obtenerPorId(id:number):Observable<Producto> {
    return this.http.get<Producto>(`${this.baseurl}/${id}`);
  }

  agregarProducto(producto:ProductoRequest):Observable<Producto> {
    return this.http.post<Producto>(this.baseurl, producto);
  }

  actualizarProducto(id:number, producto:ProductoRequest):Observable<Producto> {
    return this.http.put<Producto>(`${this.baseurl}/${id}`, producto);
  }
}
