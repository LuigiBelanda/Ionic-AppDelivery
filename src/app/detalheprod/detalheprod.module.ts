import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalheprodPageRoutingModule } from './detalheprod-routing.module';

import { DetalheprodPage } from './detalheprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalheprodPageRoutingModule
  ],
  declarations: [DetalheprodPage]
})
export class DetalheprodPageModule {}
