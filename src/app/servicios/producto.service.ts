import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private impuestoIGV = 0.18;

  calcularPrecioConImpuesto(precioBase:number):number {
    return precioBase + (precioBase * this.impuestoIGV);
  }

  formatearPrecio(precio:number):string {
    return `S/ ${precio.toFixed(2)}`;
  }

}
