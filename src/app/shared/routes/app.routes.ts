import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('../../modules/admin-home').then(m => m.AppAdminHome),},
  {path: 'manage/doctors', loadComponent: () => import('../../modules/personal/ManageDoctors').then(m => m.ManageDoctors),},
  {path: 'manage/receptionists', loadComponent: () => import('../../modules/personal/ManageReceptionist').then(m => m.ManageReceptionist),},
];
