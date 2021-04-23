import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DrawableDirective } from './drawable.directive';
import Route1ComponentComponent  from './components/route1-component/route1-component.component';
import NumbersComponent  from './components/numbers/numbers.component';
import LoginComponent  from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import RegisterComponent from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawableDirective,
    Route1ComponentComponent,
    NumbersComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
