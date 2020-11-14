import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheprodPage } from './detalheprod.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheprodPageRoutingModule {}
