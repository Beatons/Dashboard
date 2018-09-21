import { Routes } from '@angular/router';

export const routes:Routes = [
   {
    path: '',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'users',
    loadChildren: './pages/users/users.module#UsersModule'
  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsModule'
  }
]
