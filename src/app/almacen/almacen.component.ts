import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {
  precio: number;
  cantidad: number;
  precioFinal: number;

  calcularPrecio() {
    if (this.cantidad > 20) {
      this.precioFinal = this.precio * this.cantidad * 0.9;
    } else if (this.cantidad > 10) {
      this.precioFinal = this.precio * this.cantidad * 0.95;
    } else {
      this.precioFinal = this.precio * this.cantidad;
    }
  }
}
