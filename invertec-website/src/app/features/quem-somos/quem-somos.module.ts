import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { QuemSomosRoutingModule } from './quem-somos-routing.module';
import { QuemSomosComponent } from './quem-somos.component';


@NgModule({
  declarations: [
    QuemSomosComponent
  ],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    NgOptimizedImage
  ]
})
export class QuemSomosModule { }
