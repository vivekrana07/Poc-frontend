import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { Signup } from '../models/signup';
import { CartorderService } from '../Services/cartorder.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user:Login;
  list:Signup;

  constructor(private usr:UserService,private router:Router,private cart:CartorderService) {
    this.user=new Login();
   }

  ngOnInit() {
    
  }

  validateUser(txtUserName:string,txtPassword:string )
  {
    this.user.UserName=txtUserName;
    this.user.Password=txtPassword;
    this.usr.user=txtUserName;
    this.usr.pswd=txtPassword;
    this.usr.getuser(this.user).subscribe(result=>{
      if(result!=null)
      {
        this.cart.delcart().subscribe(result=>{});
        alert("Login Successfull");
        this.router.navigate(['/Home/']);
      }
    },err => {
      console.log(err.error);
      alert(err.error)
     })
  }

  validateadmin(txtUserName:string,txtPassword:string )
  {
    this.user.UserName=txtUserName;
    this.user.Password=txtPassword;
    this.usr.user=txtUserName;
    this.usr.pswd=txtPassword;
    this.usr.getadmin(this.user).subscribe(result=>{
      if(result!=null)
      {
        alert("Login Successfull");
        this.router.navigate(['/Home/']);
      }
    },err => {
      console.log(err.error);
      alert(err.error)
    })
  }
}
