import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { AlmacenComponent } from './almacen/almacen.component';
import { RickMortyApiComponent } from './rick-morty-api/rick-morty-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ObreroComponent } from './obrero/obrero.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AlmacenComponent,
    RickMortyApiComponent,
    ObreroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
