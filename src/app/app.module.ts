import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdToolbarModule,
  MdButtonModule,
  MdSidenavModule,
  MdListModule,
  MdCardModule,
  MdGridListModule,
  MdIconModule,
  MdDialogModule,
  MdInputModule
} from '@angular/material';
import 'hammerjs';

import {
  GrowlModule,
  AccordionModule,
  MultiSelectModule
} from 'primeng/primeng';

import { AppRoutingModule }     from './app-routing.module';
import { AuthService } from './auth.service';
import { EventsService } from './events.service';

import { AppComponent, AuthDialog } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { MyProfilComponent } from './my-profil/my-profil.component';
import { EventOverviewComponent } from './event-overview/event-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthDialog,
    EventsComponent,
    MyEventsComponent,
    MyProfilComponent,
    EventOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdListModule,
    MdCardModule,
    MdGridListModule,
    MdIconModule,
    MdDialogModule,
    MdInputModule,
    GrowlModule,
    AccordionModule,
    MultiSelectModule
  ],
  entryComponents: [
    AuthDialog
  ],
  providers: [
    AuthService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
