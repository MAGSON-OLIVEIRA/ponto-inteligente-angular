import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    BrowserAnimationsModule,
    LoginModule, 
    LoginRoutingModule,
    CadastroPjRoutingModule,
    CadastroPjModule,
    CadastroPfRoutingModule, 
    CadastroPfModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
