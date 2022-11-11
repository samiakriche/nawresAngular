import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocietesComponent } from './societes/societes.component';
import {CreateSocieteComponent} from './create-societe/create-societe.component'
const routes: Routes = [
  { path: '', redirectTo: 'societe', pathMatch: 'full' },
  { path: 'societe', component: SocietesComponent },
  { path: 'cs', component: CreateSocieteComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
