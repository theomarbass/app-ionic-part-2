import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then(m => m.InicioPage)
  },
  {
    path: 'informacion-personal',
    loadComponent: () => import('./informacion-personal/informacion-personal.page').then(m => m.InformacionPersonalPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.page').then(m => m.ContactoPage)
  },
];
