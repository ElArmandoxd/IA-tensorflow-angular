import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import Route1ComponentComponent from './components/route1-component/route1-component.component';
import NumbersComponent from './components/numbers/numbers.component';

const routes: Routes = [
  {
    path: '',
    component: Route1ComponentComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
