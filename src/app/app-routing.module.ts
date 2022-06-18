import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplexComponent } from './components/complex/complex.component';
import { HomeComponent } from './components/home/home.component';
import { SimpleComponent } from './components/simple/simple.component';

const routes: Routes = [
 
  {path:'Simple' , component:SimpleComponent},
  {path:'All' , component:HomeComponent},
  {path:'Complex' , component:ComplexComponent},
  {path:'' , redirectTo:'All' , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
