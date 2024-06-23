import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private readonly apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public get<T>(path: string): Observable<T> {
    const url = `${this.apiUrl}/${path}`;
    return this.http.get<T>(url);
  }
}