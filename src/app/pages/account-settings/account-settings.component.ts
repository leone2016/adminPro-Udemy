import { Component, OnInit } from '@angular/core';


import { SettingsService } from '../../services/service.index';




@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {


  constructor(  public _ajustes: SettingsService) {

  }

  ngOnInit() {
    this.colocarCheck();
  }

  funcionCambioColor(tema: string, link: any ) {
   /*  console.log(tema);
    console.log(link); */
    this.aplicarVisto(link);
    this._ajustes.aplicarTema(tema);

  }

  aplicarVisto(link: any){
    // vanila javascript, no es recomendable, ya que no es codigo de angular ni typeScritp, pero son compatibles
      // genera un arreglo con todas las clases tipo selector
      let selectores: any = document.getElementsByClassName('selector'); // esto lo saco de... class="selector blue-theme"

      console.log(selectores);
       for(let ref of selectores){
        //esto se llama vanila javascript
         ref.classList.remove('working');
      }

         link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector'); // esto lo saco de... class="selector blue-theme"
    let tema = this._ajustes.ajustes.tema;

     for(let ref of selectores){
      //esto se llama vanila javascript
      if(ref.getAttribute('data-theme')===tema ){
        ref.classList.add('working');
        break;
      }

    }


  }


}
