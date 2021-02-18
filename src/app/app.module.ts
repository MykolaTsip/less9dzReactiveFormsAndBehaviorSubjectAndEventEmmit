import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { BehComponent } from './components/beh/beh.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BehComponent,
    CounterComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'next', loadChildren: () => import('./next-new.module/next-new.module.module').then(m => m.NextNew)
      },
      {
        path: 'beh', component: BehComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
