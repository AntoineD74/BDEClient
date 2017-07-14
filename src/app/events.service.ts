import { Injectable } from '@angular/core';

import { Event } from './models/event';

@Injectable()
export class EventsService {

  constructor(
  )
  {
    this.events = [];
      this.events.push(
        new Event(
          0,
          "12 septembre 2017 à 21h",
          "13 septembre 2017 à 5h",
          "Soirée d'intégration Bachelor",
          "Le Petit Salon",
          "Soirée d'intégration des B1, B2 et B3 ! Evènement à ne manquer sous aucun prétexte !",
          "12-13 septembre 2017")
        );
        this.events.push(
          new Event(
            1,
            "7 octobre 2017 à 21h",
            "8 octobre 2017 à 5h",
            "Soirée d'intégration Master",
            "Le Petit Salon",
            "Soirée d'intégration des M1 et M2 ! Evènement à ne manquer sous aucun prétexte !",
            "7-8 octobre 2017")
          );
        this.events.push(
          new Event(
            2,
            "17 janvier 2018 à 19h",
            "19 janvier 2018 à 22h",
            "Week-End Ski",
            "Val Thorens",
            "Partez en week-End à Val Thorens. Ski et soirées en prévision !",
            "17-19 janvier 2018")
          );
  }

  events:Event[];
  userEvents:Event[];

  public getEvents():Event[]{
    return this.events;
  }

}
