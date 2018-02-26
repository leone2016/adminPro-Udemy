import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu:any=[
    {
      titulo:'principal',
      icono: 'mdi mdi-guage',
      submenu: [
        {titulo:'DashBoard', url:'/dashboard'},
        {titulo:'ProgressBar', url:'/progress'},
        {titulo:'Graficas', url:'/graficas1'},
        {titulo:'Promesas', url:'/promesas'},
        {titulo:'RxJs', url:'/rxjs'},
      ]

    }
  ];
  constructor() { }

}
