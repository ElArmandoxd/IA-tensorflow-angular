import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Route1ComponentComponent from './components/route1-component/route1-component.component';
import NumbersComponent from './components/numbers/numbers.component';
import LoginComponent from './components/login/login.component';
import RegisterComponent from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path:'dashboard',
    component: Route1ComponentComponent
  },
  {
    path: 'register',
    component : RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
