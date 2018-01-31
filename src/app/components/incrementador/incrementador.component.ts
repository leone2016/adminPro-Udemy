import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda = 'Leyenda';


  @Output() changeValue: EventEmitter<number> = new EventEmitter();
  constructor() {
      console.log(this.leyenda);
      console.log(this.porcentaje);
  }

  ngOnInit() {
  }
  cambiarValor(valor) {
    if ((this.porcentaje + valor) >= 0 && (this.porcentaje + valor) <= 100) {
      this.porcentaje = this.porcentaje + valor;
    }
    this.changeValue.emit(this.porcentaje);
  }
}
