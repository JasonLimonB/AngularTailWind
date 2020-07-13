import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EjempipesComponent } from './components/ejempipes/ejempipes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ConsumoapiComponent } from './components/consumoapi/consumoapi.component';

import { HttpClientModule } from '@angular/common/http';

import { RickAndMortySService } from './services/consumo/rick-and-morty-s.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EjempipesComponent,
    ContactoComponent,
    MenuComponent,
    ConsumoapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RickAndMortySService],
  bootstrap: [AppComponent]
})
export class AppModule { }
