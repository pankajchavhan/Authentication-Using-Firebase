import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PageTitle } from './enums/page-title';
import { RoutePaths } from './enums/route-paths';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {
      path: '',
      redirectTo: RoutePaths.DASHBOARD,
      pathMatch: 'full'
   },
   {
      path: RoutePaths.DASHBOARD,
      component: DashboardComponent,
      data: { title: PageTitle.DASHBOARD }
   },
   {
      path: RoutePaths.LOGIN,
      component: LoginComponent,
      data: { title: PageTitle.LOGIN }
   },
   {
      path: RoutePaths.REGISTRATION,
      loadChildren: () => import('./Registration/registration/registration.module').then(m => m.RegistrationModule)
   },
   {
      path: RoutePaths.LANDING_PAGE,
      loadChildren: () => import('./landing-page/landing-page/landing-page.module').then(m => m.LandingPageModule)
   },

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
