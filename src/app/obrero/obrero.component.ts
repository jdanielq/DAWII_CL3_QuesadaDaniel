import { Component } from '@angular/core';

@Component({
  selector: 'app-obrero',
  templateUrl: './obrero.component.html',
  styleUrls: ['./obrero.component.css']
})
export class ObreroComponent {
  horas: number = 0;
  salario: number = 0;

  calcularSalario() {
    const salarioPorHora = 16;
    const salarioExtraPorHora = 20;
    const horasNormales = 40;

    if (this.horas <= horasNormales) {
      this.salario = this.horas * salarioPorHora;
    } else {
      const horasExtras = this.horas - horasNormales;
      this.salario = horasNormales * salarioPorHora + horasExtras * salarioExtraPorHora;
    }
  }
}
