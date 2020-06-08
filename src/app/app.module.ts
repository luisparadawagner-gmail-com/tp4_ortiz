import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioVideojuegoComponent } from './componentes/formulario-videojuego/formulario-videojuego.component';
import { CentralVideojuegoComponent } from './componentes/central-videojuego/central-videojuego.component';
import { TablaVideojuegoComponent } from './componentes/tabla-videojuego/tabla-videojuego.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioVideojuegoComponent,
    CentralVideojuegoComponent,
    TablaVideojuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
