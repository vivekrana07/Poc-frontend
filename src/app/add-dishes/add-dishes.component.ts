import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Catageory } from '../Models/Catagery';
import { Dish } from '../Models/Dish';
import { AdmindishService } from '../Services/admindish.service';
import { AdminopService } from '../Services/adminop.service';


@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent implements OnInit {

  dishform:FormGroup;
  dish: Dish;
  ctgylist:Catageory;
  tempImgUrl: any = '';
  selected:any='';
  constructor(private fb:FormBuilder,private admindish:AdmindishService,private admin:AdminopService) { }

  ngOnInit(){
    
    this.dishform=this.fb.group({
      name:[''],
      price:[''],
      description:[''],
      image:[''],
      ctgid:[''] 
    })
    this.admin.getcatagery().subscribe(result => {
      this.ctgylist = result;
    });
     
  }
  update(e)
  {
    this.selected=e.target.value;
  }
  
  onSelectFile(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev: any) => {
      this.tempImgUrl = reader.result;
    }

  }
  adddish()
  {
    this.dish=this.dishform.value;
    this.dish.image=this.tempImgUrl;
    this.dish.ctgid=this.selected;
    this.admindish.addDish(this.dish).subscribe(result=>{
      if (result) {
        alert('Dish Added successfuly.. ');
      }
    })
  }

}
