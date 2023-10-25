import { EventService } from './../../back/services/event.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  events?: any[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    console.log("hello")
    this.eventService.getAll().subscribe((data: any) => {
      this.events = data;
      console.log(data)
    });
  }
}
