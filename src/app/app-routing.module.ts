import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/ui/dashboard/dashboard/dashboard.component';
import { PageTitle } from 'src/app/core/enums/page-title';
import { RoutePaths } from 'src/app/core/enums/route-paths';
import { ForgotPasswordComponent } from 'src/app/ui/forgot-password/forgot-password.component';
import { AuthGuard } from 'src/app/guards/auth/auth.guard';
import { LoginComponent } from 'src/app/ui/login/login.component';

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
      path: RoutePaths.FORGOT_PASSWORD,
      component: ForgotPasswordComponent,
      data: { title: PageTitle.FORGOT_PASSWORD }
   },
   {
      path: RoutePaths.LOGIN,
      component: LoginComponent,
      data: { title: PageTitle.LOGIN }
   },
   {
      path: RoutePaths.REGISTRATION,
      loadChildren: () => import('src/app/ui/Registration/registration/registration.module').then(m => m.RegistrationModule)
   },
   {
      path: RoutePaths.LANDING_PAGE,
      canLoad:[AuthGuard],
      loadChildren: () => import('src/app/ui/landing-page/landing-page/landing-page.module').then(m => m.LandingPageModule)
   },

];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
