import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'os-view',
    loadChildren: () => import('./os-view/os-view.module').then( m => m.OsViewPageModule)
  },
  {
    path: 'finalizar-os',
    loadChildren: () => import('./finalizar-os/finalizar-os.module').then( m => m.FinalizarOsPageModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
  },
  {
    path: 'tela-inicial-prestador',
    loadChildren: () => import('./tela-inicial-prestador/tela-inicial-prestador.module').then( m => m.TelaInicialPrestadorPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

