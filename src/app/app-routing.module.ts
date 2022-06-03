import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageModule } from './home/home.module'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => HomePageModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
