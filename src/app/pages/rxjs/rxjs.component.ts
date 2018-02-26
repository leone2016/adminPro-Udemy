import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/RX";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    console.log("====================================");
    console.log(" WELCOME TO OBSERVABLE");
    console.log("====================================");

    console.log("new Observable(), no es una propiedad del ES6, por lo tanto se tienen que importar rxjs/Observable (PRODUCCION)," +
      " rxjs/RX (PRUEBAS) este ultimo es mas pesado y carga cosas que talvez no se usan, por eso no se utiliza en PRODUCCION " );
    console.log("====================================");
    console.log("MUY IMPORTANTE EL OBS. UNA VEZ EJECUTADO SE EJECUTA EN CUALQUIER COMPONENTE");



    console.log(" existen dos tipo de obs.retry(), obs.retry(2), el primero ejecuta n veces, el otro solo 2 veces")
    this.regresaObs().retry(2).subscribe(
      numero=>console.log('subscrito',numero),
      error => console.log('Error en el obs.',error),
      ()=>console.log('el observador termino')

    );

  }

  ngOnInit() {
  }

  regresaObs():Observable<number>{
    return  new Observable( observer =>{
      let contador=0;
      let interval= setInterval( ()=>{
        contador +=1;
        observer.next( contador );
        if( contador === 3){
          clearInterval( interval );//para que el intervalo se detenga
          observer.complete();
        }

        if( contador ===2){
          clearInterval( interval );//para que el intervalo se detenga
          observer.error('AUXILIO jajaj verifica que funciona el error, tenia que llegar a 3 ');
        }
      },1000);
    });
  }

}
