import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catageory } from '../Models/Catagery';

@Injectable({
  providedIn: 'root'
})
export class AdminopService {

  apiurl:string="https://localhost:44348/api/Catagery/";

  constructor(private ht: HttpClient) { }

  addcatagery(ctg:Catageory):Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type','application/json' );
    return this.ht.post(this.apiurl+'add',ctg,{headers});
  }
  getcatagery():Observable<any>
  {
    return this.ht.get(this.apiurl+'list',{responseType:'json'})
  }
  delcatagery(id:number):Observable<any>
  {
    return this.ht.delete(this.apiurl+id, { responseType: 'json' });
  }

}
