import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components';
import { AddbookComponent } from './components/addbook/addbook.component';


const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"about",component:AboutComponent},
  {path:"addbook",component:AddbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
