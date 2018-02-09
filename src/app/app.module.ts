import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

//RUTAS
import { APP_ROUTES } from './app.routes';
//COMPONENTES EXTERNOS
import { PagesModule } from './pages/pages.module';
/* import { IncrementadorComponent } from './components/incrementador/incrementador.component';
 */import { FormsModule } from '@angular/forms';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
/*     GraficoDonaComponent,
 */    /* IncrementadorComponent */
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
