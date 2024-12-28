import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://us-central1-concise-ranger-437618-k4.cloudfunctions.net/concise-ranger-functions'; // replace with your function URL

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
