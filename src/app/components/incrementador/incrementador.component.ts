import { Component, OnInit, Input, Output, EventEmitter, ViewChild,ElementRef } from '@angular/core';




@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
 @ViewChild('txtProgress') txtProgress: ElementRef; //recibe como parametro una ref HTML  eg.#txtProgress

  @Input() porcentaje: number = 50;
  @Input('nombre') leyenda = 'Leyenda';


  @Output() changeValue: EventEmitter<number> = new EventEmitter();


  constructor() {
     /*  console.log(this.leyenda);
      console.log(this.porcentaje); */
  }

  ngOnInit() {
  }

  cambio(nuevoValor: number ) {
    /**
     * ejercicio cuando se crean varios elementos que son insertador en un componente PADRE
     * estos estaran sincronizados por ser los mismos,
     * si no deseamos que se sincronizen se utiliza  @ViewChild para obtener el valor del primer elemento
     */
   // let elementHTML: any = document.getElementsByName('porcentaje')[0];
      console.log("View Child");
      console.log(this.txtProgress);
      console.log("Envia los valores al padre");
      console.log(nuevoValor);
      if ( ( nuevoValor) > 100) {
        this.porcentaje = 100;
      }else  if ( ( nuevoValor) < 0) {
        this.porcentaje = 0;

      }
     // elementHTML.value = this.porcentaje; //impide que en la caja de texto se ingrese un valor diferente a porcentaje
     this.txtProgress.nativeElement.value = this.porcentaje;
     this.txtProgress.nativeElement.focus();
     this.changeValue.emit(this.porcentaje);
  }
  cambiarValor(valor) {
    if ((this.porcentaje + valor) >= 0 && (this.porcentaje + valor) <= 100) {
      this.porcentaje = this.porcentaje + valor;
    }
    this.changeValue.emit(this.porcentaje);
  }
}
