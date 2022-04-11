import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { Signup } from '../models/signup';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  users:Login;
  sign:Signup;
  constructor(private usr:UserService) { 
    this.users=new Login();
  }

  ngOnInit() {
    this.users.UserName=this.usr.user;
    this.users.Password=this.usr.pswd;
    this.usr.getuser(this.users).subscribe(result=>{
      this.sign=result;
    });
  }

}
