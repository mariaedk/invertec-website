import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomacaoIndustrialRoutingModule } from './automacao-industrial-routing.module';
import { AutomacaoIndustrialComponent } from './automacao-industrial.component';


@NgModule({
  declarations: [
    AutomacaoIndustrialComponent
  ],
  imports: [
    CommonModule,
    AutomacaoIndustrialRoutingModule
  ]
})
export class AutomacaoIndustrialModule { }
