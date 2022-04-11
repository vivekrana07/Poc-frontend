import { Component, OnInit } from '@angular/core';
import { Dish } from '../Models/Dish';
import { AdmindishService } from '../Services/admindish.service';
import {Order} from '../Models/Order'
import { CartorderService } from '../Services/cartorder.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';



@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dish: Dish;
  cid: number;
  ord: Order;
  constructor(private admindishes: AdmindishService,private cartord:CartorderService,private router : Router,public usr:UserService) { }

  ngOnInit() 
  {
    this.cid = this.admindishes.ctgyid;
    this.admindishes.getdishbyid(this.cid).subscribe(result => {
      this.dish = result;
    });
  }
  Cart(ds:Order,qty:number)
  {
    ds.quantity=qty;
    console.log(ds.price);
    this.cartord.addorder(ds).subscribe(result=>{
      if (result) {
        alert('Order Added Into the Cart');
      }
    })
  }
  gocart()
  {
    this.router.navigate(['/ordercart']);
  }
  delete(id:number)
  {
    this.admindishes.deldish(id).subscribe(result=>{
      if(result)
      {
        alert("Dish deleted")
      }
    })
  }

}
