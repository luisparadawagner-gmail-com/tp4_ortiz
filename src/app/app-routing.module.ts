import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioVideojuegoComponent } from './componentes/formulario-videojuego/formulario-videojuego.component';
import { TablaVideojuegoComponent } from './componentes/tabla-videojuego/tabla-videojuego.component';
import { CentralVideojuegoComponent } from './componentes/central-videojuego/central-videojuego.component';

const routes: Routes = [
  {
    path: 'formulario-videojuego/:"title"',
    component: FormularioVideojuegoComponent,
  },
  {
    path: 'tabla-videojuego',
    component: TablaVideojuegoComponent,
    children: [
      {
        path: 'central',
        component: CentralVideojuegoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
