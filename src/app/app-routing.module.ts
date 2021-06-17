import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PpProjComponent } from './pp-proj/pp-proj.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'parklandpreschoolproject', component: PpProjComponent },
  { path: 'home', component: MainComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
