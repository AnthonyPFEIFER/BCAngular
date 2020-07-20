import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { AdvertComponent } from './components/advert/advert.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAdvertsComponent } from './components/add-adverts/add-adverts.component';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProfilComponent } from './components/admin-profil/admin-profil.component';
import { ProProfilComponent } from './components/pro-profil/pro-profil.component';
import { GarageComponent } from './components/garage/garage.component';
import { AddGarageComponent } from './components/add-garage/add-garage.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { CgiComponent } from './components/cgi/cgi.component';
import { GaragesComponent } from './components/garages/garages.component';
import { EditProComponent } from './components/edit-pro/edit-pro.component';
import { EditGarageComponent } from './components/edit-garage/edit-garage.component';
import { SearchPipe } from './pipes/search.pipe';
import { EditAdvertComponent } from './components/edit-advert/edit-advert.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccueilComponent,
    ConnexionComponent,
    AdvertComponent,
    AddAdvertsComponent,
    AddProComponent,
    LoginComponent,
    AdminProfilComponent,
    ProProfilComponent,
    GarageComponent,
    AddGarageComponent,
    AdvertsComponent,
    CgiComponent,
    GaragesComponent,
    EditProComponent,
    EditGarageComponent,
    SearchPipe,
    EditAdvertComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
