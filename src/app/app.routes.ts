import { Routes } from '@angular/router';
import { Uc00604 } from './pages/uc00604/uc00604';

export const routes: Routes = [
  /**nossa primeira rota */
  {path:'', redirectTo:'welcome', pathMatch:'full'},

  {path:"pages/uc00604", component:Uc00604},
  {path:'welcome', loadComponent:() => import('./pages/welcome/welcome').then(c => c.Welcome)},
  {path:"pages/authentication", loadComponent:() => import('./pages/Authentication/authentication').then(c => c.Authentication)},
  /**rota padrao sem lazyload */


/**nossa ultima rota */
  {path:'**', loadComponent:() => import('./pages/welcome/welcome').then(filipa => filipa.Welcome)},
];
