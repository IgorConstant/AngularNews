import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsFeedService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get('http://localhost:2120/api/v1/news');
  }
}
