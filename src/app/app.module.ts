import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DrawableDirective } from './drawable.directive';
import Route1ComponentComponent  from './components/route1-component/route1-component.component';
import NumbersComponent  from './components/numbers/numbers.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawableDirective,
    Route1ComponentComponent,
    NumbersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
