import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../shared/share.module';
@NgModule({
        declarations:[//trabaja a dentro de la carpata pages
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            PagesComponent
        ],
        exports:[//trabaja fuera de la carpeta pages
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            PagesComponent
        ],
        imports:[
            ShareModule
        ]

})

export class PagesModule{}