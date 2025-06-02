import { Routes } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Finance } from './finance/finance';
import { Concepts } from './concepts/concepts';

export const routes: Routes = [
  {
    path: '',
    component: Sidebar,
    children: [
      { path: 'finance', component: Finance },
      { path: 'concepts', component: Concepts },
      { path: '', redirectTo: 'finance', pathMatch: 'full' }
    ]
  }
];
