import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AdvertComponent } from './components/advert/advert.component';
import { AddProComponent } from './components/add-pro/add-pro.component';
import { LoginComponent } from './components/login/login.component';
import { AdminProfilComponent } from './components/admin-profil/admin-profil.component';
import { ProProfilComponent } from './components/pro-profil/pro-profil.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'advert', component: AdvertComponent },
  { path: 'add-pro', component: AddProComponent },
  { path: 'admin-profil', component: AdminProfilComponent },
  { path: 'pro-profil/:id', component: ProProfilComponent },
  { path: 'pro-profil', component: ProProfilComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
