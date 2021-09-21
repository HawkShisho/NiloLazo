import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentacionPage } from './alimentacion.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentacionPage
  },
  {
    path: 'desayuno',
    loadChildren: () => import('./desayuno/desayuno.module').then( m => m.DesayunoPageModule)
  },
  {
    path: 'almuerzo',
    loadChildren: () => import('./almuerzo/almuerzo.module').then( m => m.AlmuerzoPageModule)
  },
  {
    path: 'cena',
    loadChildren: () => import('./cena/cena.module').then( m => m.CenaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentacionPageRoutingModule {}
