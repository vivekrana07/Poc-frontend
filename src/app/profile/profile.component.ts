import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { Signup } from '../models/signup';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { Roles } from '../models/roles';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users:Login;
  sign:Signup;
  constructor(private usr:UserService,private router:Router) {
    this.users=new Login();
   }
  ngOnInit() {
    
    this.users.UserName=this.usr.user;
    this.users.Password=this.usr.pswd;
    this.usr.getuser(this.users).subscribe(result=>{
      this.sign=result;
    });
    this.usr.getadmin(this.users).subscribe(result=>{
      this.sign=result;
      console.log(this.sign.firstName);
      console.log(this.sign.id);
    });
  }
  updatepage()
  {
    let id=this.sign.id;
    this.router.navigate(['/update-profile/'+id]);
  }

}
