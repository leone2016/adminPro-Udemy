import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {PromesasComponent} from "./promesas/promesas.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const pages_routes: Routes = [
    { //clase 22 rutas -- clase 33
        path: '',
        component: PagesComponent,
        children:[
            {path: 'dashboard',     component: DashboardComponent, data:{titulo:'Dashboard'}},
            {path: 'progress',      component: ProgressComponent,data:{titulo:'ProgressBar'}},
            {path: 'graficas1',     component: Graficas1Component,data:{titulo:'Graficas'}},
            {path: 'account-settings',     component: AccountSettingsComponent,data:{titulo:'Ajustes de tema'}},
            {path: 'promesas',     component: PromesasComponent,data:{titulo:'Promesas'}},
            {path: 'rxjs',     component: RxjsComponent,data:{titulo:'Rxjs'}},

          {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pages_routes);
