//Imports nécessaires
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';
import { MyProfilComponent } from './my-profil/my-profil.component';

//Imports des composants persos
//Gestion des routes et des redirections
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:eventId', component: EventOverviewComponent },
  { path: 'my-events', component: MyEventsComponent },
  { path: 'my-profil', component: MyProfilComponent },
];

//Déclaration du module de routing
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

//Export du module
export class AppRoutingModule {}
