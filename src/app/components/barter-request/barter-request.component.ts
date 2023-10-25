import { Component, OnInit } from '@angular/core';
import { BarterRequestService } from '../../back/services/barter-request.service';
@Component({
  selector: 'app-barter-request',
  templateUrl: './barter-request.component.html',
  styleUrls: ['./barter-request.component.css']
})
export class BarterRequestComponent implements OnInit {
  barterRequests?: any[];

  constructor(private barterRequestService: BarterRequestService) { }

  ngOnInit(): void {
    this.barterRequestService.getAllBarterRequests().subscribe((data: any) => {
      this.barterRequests = data;
      console.log(data)
    });
  }
}
