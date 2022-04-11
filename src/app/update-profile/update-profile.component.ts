import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../models/signup';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  signupform:FormGroup;
  signup:Signup;
  tempImgUrl:any='';
  signlist:Signup[]=[];
  constructor(private fb:FormBuilder,private usr:UserService, private acr: ActivatedRoute) { 
    this.signup=new Signup();
  }

  ngOnInit(){
    this.signupform= this.fb.group({
      id:[],
      FirstName :[''],
      LastName :[''],
      EmailAddress :[''],
      Mobile :[''],
      Password : [''],
      Address:[''],
      Image:['']
     });
     let id = parseInt(this.acr.snapshot.params.id);
     this.usr.getusrbyid(id).subscribe(result => {
      this.signup = result
      this.signupform.controls[id].setValue(this.signup.id);
      this.signupform.controls['FirstName'].setValue(this.signup.firstName);
      this.signupform.controls['LastName'].setValue(this.signup.lastName);
      this.signupform.controls['EmailAddress'].setValue(this.signup.emailAddress);
      this.signupform.controls['Mobile'].setValue(this.signup.mobile);
      this.signupform.controls['Password'].setValue(this.signup.password);
      this.signupform.controls['Address'].setValue(this.signup.address);
      this.signupform.controls['Image'].setValue(this.signup.image)
    });
  }
  onSelectFile(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev: any) => {
      this.tempImgUrl = reader.result;
    }
  }
  Update()
  {
    
  }

}
