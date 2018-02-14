import { Component } from '@angular/core';
import { SettingsService, SharedService, SidebarService } from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public _ajustes: SettingsService) {
    //con solo injectar el servicio se puede inicializar una funcion en SettingsService
  }
  title = 'app';
}
