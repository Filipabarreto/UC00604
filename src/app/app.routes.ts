import { Routes } from '@angular/router';
import { Uc00604 } from './pages/uc00604/uc00604';

export const routes: Routes = [
  /**nossa primeira rota */
  {path:'', redirectTo:'welcome', pathMatch:'full'},
  {path:'welcome', loadComponent:() => import('./pages/welcome/welcome').then(c => c.Welcome)},
  {path:"pages/authentication", loadComponent:() => import('./pages/authentication/authentication').then(c => c.Authentication)},
  /**rota padrao sem lazyload */
  {path:"pages/uc00604", component:Uc00604},
/**nossa ultima rota */
  {path:'**', loadComponent:() => import('./pages/welcome/welcome').then(filipa => filipa.Welcome)},
];
