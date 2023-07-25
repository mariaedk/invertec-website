import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './servicos.component';


@NgModule({
  declarations: [
    ServicosComponent
  ],
  exports: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    NgOptimizedImage
  ]
})
export class ServicosModule { }
