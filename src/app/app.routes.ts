import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Studio Dentistico Mariani — Padova | Implantologia, Estetica, Ortodonzia'
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
    title: 'Servizi — Studio Dentistico Mariani Padova'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Studio Dentistico Mariani Padova'
  },
  {
    path: 'tecnologie',
    loadComponent: () => import('./pages/tecnologie/tecnologie.component').then((m) => m.TecnologieComponent),
    title: 'Tecnologie — Studio Dentistico Mariani Padova'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Prima visita gratuita — Studio Dentistico Mariani Padova'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
