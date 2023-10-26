import { VenueService } from './../../back/services/venue.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {
  venues?: any[];

  constructor(private VenueService: VenueService) { }

  ngOnInit(): void {
    this.VenueService.getAllVenues().subscribe((data: any) => {
      this.venues = data;
      console.log(data)
    });
  }
}
