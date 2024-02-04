import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor(private http: HttpClient) { }

   getProductList(): Observable<any> {
     return this.http.get('https://identity.dinarcrm.com/api/v1/Currencies/GetAll');
  }
}
