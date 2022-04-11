import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from '../Models/Dish';

@Injectable({
  providedIn: 'root'
})
export class AdmindishService {

  apiurl:string="https://localhost:44348/api/Dishes/";
  ctgyid:number;

  constructor(private ht: HttpClient) { }

  addDish(dish:Dish):Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type','application/json' );
    dish.price = parseInt(dish.price.toString());
    dish.ctgid= parseInt(dish.ctgid.toString());
    return this.ht.post(this.apiurl+'add',dish,{headers});
  }
  getdish():Observable<any>
  {
    return this.ht.get(this.apiurl+'list',{responseType:'json'})
  }
  getdishbyid(id:number):Observable<any>
  {
    return this.ht.get(this.apiurl+id,{responseType:'json'})
  }
  deldish(id:number):Observable<any>
  {
    return this.ht.delete(this.apiurl+id, { responseType: 'json' });
  }
}
