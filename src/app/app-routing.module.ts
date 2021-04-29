import { PpProjComponent } from './pp-proj/pp-proj.component';
import { NventoryProjComponent } from './nventory-proj/nventory-proj.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homeinventoryapp', component: NventoryProjComponent },
  { path: 'parklandpreschoolproject', component: PpProjComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
