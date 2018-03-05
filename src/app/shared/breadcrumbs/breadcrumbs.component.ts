import { Component, OnInit } from '@angular/core';
import {ActivationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import {Title,Meta,MetaDefinition} from "@angular/platform-browser";
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
labelPage="";
  constructor(private router: Router, public _title: Title, public _meta:Meta) {
    //filter retorna un true o un false;
    //====================================================
    // CLASE 80 explica como sacar las migas de pan
    //====================================================
    //importante revisar en angular.io/api/platform-broser/Title
    //importante revisar en angular.io/api/platform-broser/Meta
      this.getDataRoute().subscribe( data =>{
        console.log(data);
        this.labelPage = data.titulo;
        this._title.setTitle( this.labelPage);

        let metaTag: MetaDefinition ={
          name: 'description',
          content:this.labelPage
        }
        this._meta.updateTag(metaTag);
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
