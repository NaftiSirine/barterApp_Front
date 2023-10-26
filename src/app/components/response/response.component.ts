import { ResponseService } from './../../back/services/response.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  responses?: any[];

  constructor(private responseService: ResponseService) { }

  ngOnInit(): void {
    this.responseService.getAllResponses().subscribe((data: any) => {
      this.responses = data;
      console.log(data)
    });
  }
}
