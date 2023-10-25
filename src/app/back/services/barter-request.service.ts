import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BarterRequestService {

  private apiUrl = 'http://localhost:8082/barterRequest';
  constructor(private http: HttpClient) { }

  getAllBarterRequests(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
