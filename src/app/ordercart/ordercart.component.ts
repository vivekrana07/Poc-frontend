import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Models/Order';
import { CartorderService } from '../Services/cartorder.service';

@Component({
  selector: 'app-ordercart',
  templateUrl: './ordercart.component.html',
  styleUrls: ['./ordercart.component.css']
})
export class OrdercartComponent implements OnInit {

  ord:Order;
  constructor(private cart:CartorderService,private router:Router) { }

  ngOnInit() 
  {
    this.cart.getorder().subscribe(result =>
    {
      this.ord = result;
    });
  }
  checkout()
  {
    this.cart.delcart().subscribe(result=>{});
    this.router.navigate(['/checkout/']);
    alert('Ordered Placed')
  }

}
