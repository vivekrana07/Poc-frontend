import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../models/signup';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupform:FormGroup;
  signup:Signup;
  tempImgUrl:any='';
  constructor(private fb:FormBuilder,private usr:UserService) { }

  ngOnInit(){
    this.signupform= this.fb.group({
      FirstName :[''],
      LastName :[''],
      EmailAddress :[''],
      Mobile :[''],
      Password : [''],
      Address:[''],
      Image:['']
     })
  }
  onSelectFile(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev: any) => {
      this.tempImgUrl = reader.result;
    }
  }

  Signup()
  {
     this.signup=this.signupform.value;
     this.signup.image=this.tempImgUrl;
     this.usr.registration(this.signup).subscribe(result=>{
      if (result) {
        alert('reistration successfuly.. ');
        this.usr.isLogin=false;
        this.usr.isadmin=false;
      }
    })
  }

}
