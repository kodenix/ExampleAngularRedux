import { AppReducer } from './../redux/app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ResetComponent } from './reset/reset.component';

import { environment } from '../environments/environment';

// import dev only modules
let developModules = [
  StoreDevtoolsModule.instrument({
    maxAge: 25
  }),
];

// if production clear dev imports and set to prod mode
if (environment.production === true) {
  developModules = [];
}

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducer),
    developModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
