import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTitle } from './enums/page-title';
import { RoutePaths } from './enums/route-paths';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
     path:'',
     redirectTo:RoutePaths.LOGIN,
     pathMatch:'full'
  },
  {
     path: RoutePaths.LOGIN,
     component:LoginComponent,
     data: { title: PageTitle.LOGIN }
  },
  {
     path: RoutePaths.REGISTRATION, 
     loadChildren: () => import('./Registration/registration/registration.module').then(m => m.RegistrationModule) 
    },
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
