import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/RX";
import {observable} from "rxjs/symbol/observable";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  constructor() {
    console.log("====================================");
    console.log(" WELCOME TO OBSERVABLE");
    console.log("====================================");

    console.log("new Observable(), no es una propiedad del ES6, por lo tanto se tienen que importar rxjs/Observable (PRODUCCION)," +
      " rxjs/RX (PRUEBAS) este ultimo es mas pesado y carga cosas que talvez no se usan, por eso no se utiliza en PRODUCCION " );
    console.log("====================================");
    console.log("MUY IMPORTANTE EL OBS. UNA VEZ EJECUTADO SE EJECUTA EN CUALQUIER COMPONENTE");



    console.log(" existen dos tipo de obs.retry(), obs.retry(2), el primero ejecuta n veces, el otro solo 2 veces")
    this.subscription = this.regresaObs().subscribe(
      numero=>console.log('subscrito------- NUMERO IMPAR',numero),
      error => console.log('Error en el obs.',error),
      ()=>console.log('el observador termino')

    );

  }

  ngOnInit() {
  }

  regresaObs():Observable<any>{
    console.log('clase 76 y 77 explica el map y Obserbable el map');
   console.log(' MAP sirve para agregar un Obj que devuelva un observable');
    return  new Observable( observer =>{
      let contador=0;
      let interval= setInterval( ()=>{
        contador +=1;
        let salida = {valor:contador};
        observer.next( salida );
        // if( contador === 3){
        //   clearInterval( interval );//para que el intervalo se detenga
        //   observer.complete();
        // }

        // if( contador ===2){
        //   clearInterval( interval );//para que el intervalo se detenga
        //   observer.error('AUXILIO jajaj verifica que funciona el error, tenia que llegar a 3 ');
        // }
      },500);
    }).retry(2).map( (res:any) =>{
      return res.valor;
    })
      .filter( (valor,index) => {
        console.log('filter',valor,index);
        if ((valor % 2) === 1){
          return true;
        }else{
          return false;
        }
         // filter siempre retorna un booleano
        // filter permite controlar la informacion que es llamada desde el subcribe
      });
    // .retry(2) intenta dos veces, el MAP nunca se va a ejecutar si no se SUBSCRIBEN
  }

  ngOnDestroy(){

    console.log("la pagina se va cerrar");
    this.subscription.unsubscribe();
  }
}
