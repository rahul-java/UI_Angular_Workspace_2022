import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Uom } from '../model/uom';

@Injectable({
  providedIn: 'root'
})
export class UomService {

  constructor(private http:HttpClient) { }

  getAllUom():Observable<Uom[]>{
    return this.http.get<Uom[]>('http://localhost:9999/rest/uom/data');
  }
}
