import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LoginModule, 
  LoginRoutingModule, 
  CadastroPjRoutingModule, 
  CadastroPjModule,
  CadastroPfRoutingModule, 
  CadastroPfModule
} from './autenticacao';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LoginModule, 
    LoginRoutingModule,
    CadastroPjRoutingModule,
    CadastroPjModule,
    CadastroPfRoutingModule, 
    CadastroPfModule,
    
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
