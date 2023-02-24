import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EjercicioFinalComponent } from './components/ejercicio-final/ejercicio-final.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioFinalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
