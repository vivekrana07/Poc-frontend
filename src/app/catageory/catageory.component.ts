import { Component, OnInit } from '@angular/core';
import { Catageory } from '../Models/Catagery';
import { AdmindishService } from '../Services/admindish.service';
import { AdminopService } from '../Services/adminop.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-catageory',
  templateUrl: './catageory.component.html',
  styleUrls: ['./catageory.component.css']
})
export class CatageoryComponent implements OnInit {

  ctgylist: Catageory;
  constructor(private admin: AdminopService,private admindishh:AdmindishService,private router : Router,public usr:UserService) { }


  ngOnInit() {
      this.admin.getcatagery().subscribe(result => {
      this.ctgylist = result;
    });
  }
  Dishesop(id:number)
  {
    this.admindishh.ctgyid=id;
    this.router.navigate(['/dishes/']);
  }
  Delete(id:number)
  {
    console.log(id);
    this.admin.delcatagery(id).subscribe(result=>{
      if(result)
      {
        alert("Catagery deleted")
      }
    })
  }
}
