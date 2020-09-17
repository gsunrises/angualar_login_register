import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, RegisterComponent, UserComponent, DetailComponent } from './component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/user/login', },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login', titleI18n: 'login', } },
      { path: 'register', component: RegisterComponent, data: { title: 'Register', titleI18n: 'register' } }
    ],
  },
  {
    path: 'detail', component: DetailComponent,
    // children: [
    //   { path: 'dashboard', component: LoginComponent, data: { title: 'Dashboard', titleI18n: 'dashboard', } },
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
