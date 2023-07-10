import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomacaoIndustrialComponent } from './automacao-industrial.component';

const routes: Routes = [{ path: '', component: AutomacaoIndustrialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomacaoIndustrialRoutingModule { }
