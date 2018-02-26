import { Component, OnInit } from '@angular/core';
import {reject} from "q";

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


      this.contarTres().then(
        sms=> console.log('Termino',sms)
      ).catch(error=> console.log("Error en la promesa ", error));

  }

  contarTres():Promise<boolean>{

    return new Promise( (resolve,reject)=>{

      let contador =0;
      let intervalo=setInterval(()=>{
        contador+=1;
        console.log(contador);
        if (contador == 3){
          resolve(true);
          //reject('HUbo un ERROR');
          clearInterval(intervalo);
        }
      },1000);
    });

  }
  ngOnInit() {
  }

}
