import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Injectable()
export class SettingsService {

  //tema por default
  ajustes: Ajustes = {
    temaUrl: "assets/css/colors/default.css",
    tema:'default'
  }
  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarLocalStorage() ;

  }

  guardarLocalStorage() {
    // console.log("GUARDA EN localStorage");
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes)); //localStorage solo guarda en fotmato String

  }

  cargarLocalStorage() {
    if ( localStorage.getItem('ajustes')) {
        this.ajustes = JSON.parse(localStorage.getItem('ajustes')); //pasar de json a String
        // console.log('Carga valores localStorage');
        this.aplicarTema(this.ajustes.tema);
    } else {
        // console.log('valores x defecto');
        this.aplicarTema(this.ajustes.tema);

    }

  }

  aplicarTema(tema:string){
    let url: string = `assets/css/colors/${tema}.css`;
    this._document.getElementById('temaAdmin-app').setAttribute('href',url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarLocalStorage();

  }

}

interface Ajustes{
  temaUrl: string;
  tema: string;
}
