import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../shared/share.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

//temporal 
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

//ng2-chart
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
@NgModule({
        declarations:[//trabaja a dentro de la carpata pages
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            PagesComponent,
            IncrementadorComponent,
            GraficoDonaComponent,
            AccountSettingsComponent
        ],
        exports:[//trabaja fuera de la carpeta pages
            DashboardComponent,
            ProgressComponent,
            Graficas1Component,
            PagesComponent
        ],
        imports:[
            ShareModule,
            PAGES_ROUTES,
            FormsModule,
            ChartsModule
        ]

})

export class PagesModule{}