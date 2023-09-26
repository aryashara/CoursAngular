import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './Demo/home/home.component';
import { BindingsComponent } from './Demo/bindings/bindings.component';
import { FormsModule } from '@angular/forms';

import { Exos1Component } from './Demo/Exos/exos1/exos1.component';
import { Exos2Component } from './Demo/Exos/exos2/exos2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TutoComponent } from './Demo/tuto/tuto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BindingsComponent,
    Exos1Component,
    Exos2Component,
    TutoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
