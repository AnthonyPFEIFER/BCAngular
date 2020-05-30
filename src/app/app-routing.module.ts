import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AdvertComponent } from './components/advert/advert.component';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProfilComponent } from './components/admin-profil/admin-profil.component';
import { ProProfilComponent } from './components/pro-profil/pro-profil.component';
import { AddAdvertsComponent } from './components/add-adverts/add-adverts.component';
import { GarageComponent } from './components/garage/garage.component';
import { AddGarageComponent } from './components/add-garage/add-garage.component';
import { CgiComponent } from './components/cgi/cgi.component';
import { AdvertsComponent } from './components/adverts/adverts.component';
import { GaragesComponent } from './components/garages/garages.component';
import { EditProComponent } from './components/edit-pro/edit-pro.component';
import { EditGarageComponent } from './components/edit-garage/edit-garage.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adverts/:id', component: AdvertsComponent },
  { path: 'advert/:id', component: AdvertComponent },
  { path: 'add-advert/:id', component: AddAdvertsComponent },
  { path: 'add-pro', component: AddProComponent },
  { path: 'add-garage/:id', component: AddGarageComponent },
  { path: 'edit-pro/:id', component: EditProComponent },
  { path: 'edit-garage/:id', component: EditGarageComponent },
  { path: 'admin-profil', component: AdminProfilComponent },
  { path: 'pro-profil/:id', component: ProProfilComponent },
  { path: 'garages/:id', component: GaragesComponent },
  { path: 'garage/:id', component: GarageComponent },
  { path: 'cgi', component: CgiComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
