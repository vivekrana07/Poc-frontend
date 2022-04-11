import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartorderService } from './Services/cartorder.service';
import { UserService } from './Services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poc';
 
  constructor(public usr: UserService, private router: Router,private cart:CartorderService) {}
  logOff() {
    this.cart.delcart().subscribe(result=>{});
    alert("LOGGING OUT ");
    this.router.navigate(['/Home/']);
    this.usr.isLogin=false;
    this.usr.isadmin=false;
  }
}
