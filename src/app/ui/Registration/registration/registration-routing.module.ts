import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageTitle } from 'src/app/core/enums/page-title';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  { 
    path: '', 
    component: RegistrationComponent,
    data: { title: PageTitle.REGISTRATION}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
