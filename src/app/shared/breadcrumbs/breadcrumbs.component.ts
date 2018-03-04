import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
labelPage="";
  constructor(private router: Router) {
    //filter retorna un true o un false;

      this.getDataRoute().subscribe( data =>{
        console.log(data);
        this.labelPage = data.titulo;
      } );
  }

  ngOnInit() {
  }

  getDataRoute(){

    return    this.router.events
      .filter( evento =>evento instanceof ActivationEnd)
      .filter( (evento:ActivationEnd) =>evento.snapshot.firstChild === null)
      .map((evento:ActivationEnd)=> evento.snapshot.data);
  }

}
