import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Signup } from '../models/signup';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:string;
  pswd:string;
  isLogin: boolean = false;
  isadmin:boolean=false;
  apiurl:string="https://localhost:44348/api/Identity/";
  constructor(private ht: HttpClient) { }

  getuser(user:Login):Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type','application/json' );
    let usr= this.ht.post(this.apiurl+'login',user,{headers});
    if (usr) {
      this.isLogin = true;
      this.isadmin=false;
    }
    return usr;
  }

  getusrbyid(id:number):Observable<any>
  {
    console.log(id);
    const headers = new HttpHeaders().set('Content-Type','application/json' );
    return this.ht.post(this.apiurl,id,{headers});
  }

  getadmin(user:Login):Observable<any>
  {
    const headers = new HttpHeaders().set('Content-Type','application/json' );
    let usr= this.ht.post(this.apiurl+'admin',user,{headers});
    if (usr) {
      this.isadmin = true;
      this.isLogin=false;
    }
    return usr;
  }

  registration(sgup:Signup):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.ht.post(this.apiurl+'signup',sgup,httpOptions);
  }
}
