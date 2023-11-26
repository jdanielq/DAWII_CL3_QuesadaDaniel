import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {
  precio: number = 0;
  cantidad: number = 0;
  precioFinal: number = 0;

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
