import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserRegService {
url:string='http://localhost:9001/emp';
  constructor(private http:HttpClient) { }

  GetEmployee():Observable<string[]>{
  return this.http.get<string[]>(this.url);
  }
}
