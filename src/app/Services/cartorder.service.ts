import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class CartorderService {

  apiurl:string="https://localhost:44348/api/Order/";

  constructor(private ht: HttpClient) { }

  addorder(ord:Order):Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type','application/json' );
    ord.price = parseInt(ord.price.toString());
    ord.quantity = parseInt(ord.quantity.toString());
    ord.ctgid = parseInt(ord.ctgid.toString());
    return this.ht.post(this.apiurl+'add',ord,{headers});
  }
  getorder():Observable<any>
  {
    return this.ht.get(this.apiurl+'list',{responseType:'json'})
  }
  delcart():Observable<any>
  {
    return this.ht.get(this.apiurl+'del',{responseType:'json'})
  }

}
