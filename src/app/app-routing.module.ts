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
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'advert/:id', component: AdvertComponent },
  { path: 'advert', component: AdvertComponent },
  { path: 'add-pro', component: AddProComponent },
  { path: 'add-adverts', component: AddAdvertsComponent },
  { path: 'add-garage/:id', component: AddGarageComponent },
  { path: 'admin-profil', component: AdminProfilComponent },
  { path: 'pro-profil/:id', component: ProProfilComponent },
  { path: 'pro-profil', component: ProProfilComponent },
  { path: 'garage/:id', component: GarageComponent },
  { path: 'garage', component: GarageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
