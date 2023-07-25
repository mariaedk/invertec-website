import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'automacao-industrial',
    loadChildren: () => import('./features/automacao-industrial/automacao-industrial.module')
      .then(m => m.AutomacaoIndustrialModule)
  },
  { path: 'contato', loadChildren: () => import('./features/contato/contato.module').then(m => m.ContatoModule) },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'servicos', loadChildren: () => import('./features/servicos/servicos.module').then(m => m.ServicosModule) },
  { path: 'quem-somos', loadChildren: () => import('./features/quem-somos/quem-somos.module').then(m => m.QuemSomosModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
