import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';


import { EventsService } from '../events.service';

import { Event } from '../models/event';

@Component({
  moduleId: module.id,
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  eventTypes: SelectItem[];

  selectedEventTypes: string[];

  events:Event[];


  constructor(
    private eventsService:EventsService
  ) {
    this.eventTypes = [];
            this.eventTypes.push({label:'Soirées', value:'Soirées'});
            this.eventTypes.push({label:'Week-End', value:'Week-End'});
            this.eventTypes.push({label:'Tournois', value:'Tournois'});
            this.eventTypes.push({label:'Projection de films', value:'Projection de films'});
            this.eventTypes.push({label:'Evènements sportifs', value:'Evènements sportifs'});
  }

  ngOnInit() {
    this.events = this.eventsService.getEvents();
  }

}
