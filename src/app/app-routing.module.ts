import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'login', component: HomeComponent},
  {path:'work', component:WorkComponent, canActivate: [authGuard]},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
