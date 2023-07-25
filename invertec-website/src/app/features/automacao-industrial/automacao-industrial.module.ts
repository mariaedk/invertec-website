import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AutomacaoIndustrialRoutingModule } from './automacao-industrial-routing.module';
import { AutomacaoIndustrialComponent } from './automacao-industrial.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AutomacaoIndustrialComponent
  ],
  imports: [
    CommonModule,
    AutomacaoIndustrialRoutingModule,
    NgOptimizedImage,
    MatButtonModule
  ]
})
export class AutomacaoIndustrialModule { }
