import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ItemCarrito } from '../modelos/ItemCarrito';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private itemsSubject = new BehaviorSubject<ItemCarrito[]>([]);
  public items$:Observable<ItemCarrito[]> = this.itemsSubject.asObservable();

  public cantidadTotal$ = this.items$.pipe(
    map(items=> items.reduce((suma, item) => suma + item.cantidad, 0))
  );
  public total$ =  this.items$.pipe(
    map(items=>items.reduce((suma, item) => suma + item.producto.precio * item.cantidad, 0))
  );

  agregarProductoAlCarrito(itemCarrito:ItemCarrito):void {
    const itemsActuales = this.itemsSubject.value;
    const existe = itemsActuales.some(i=> i.producto.id === itemCarrito.producto.id);
    const nuevosItems = existe?itemsActuales.map(i=>i.producto.id === itemCarrito.producto.id
      ?{...i, cantidad: i.cantidad + itemCarrito.cantidad }:i):[...itemsActuales, itemCarrito];
    this.itemsSubject.next(nuevosItems); // emitir un nuevo estado
  }

  quitarProducto(idProducto:number){
    this.itemsSubject.next(this.itemsSubject.value.filter(i => i.producto.id != idProducto));
  }

  vaciar():void {
    this.itemsSubject.next([]);
  }
}
