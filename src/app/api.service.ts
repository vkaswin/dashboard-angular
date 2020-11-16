import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient ) { }

  getApi(){
    let url = "http://shoping-cart-api.herokuapp.com/products";
    return this.http.get(url);
  }

}
