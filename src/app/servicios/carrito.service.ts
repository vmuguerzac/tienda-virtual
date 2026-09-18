import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemCarrito } from '../modelos/ItemCarrito';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private itemsSubject = new BehaviorSubject<ItemCarrito[]>([]);
  public items$:Observable<ItemCarrito[]> = this.itemsSubject.asObservable();

  agregarProductoAlCarrito(itemCarrito:ItemCarrito):void {
    const itemsActuales = this.itemsSubject.value;
    this.itemsSubject.next([...itemsActuales, itemCarrito]); // emitir un nuevo estado
  }

  obtenerCantidadActual(){
    return this.itemsSubject.value.length;
  }


}
