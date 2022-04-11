import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCatageoryComponent } from './add-catageory/add-catageory.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { CatageoryComponent } from './catageory/catageory.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdercartComponent } from './ordercart/ordercart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'add-catageory',component:AddCatageoryComponent},
  {path:'add-dishes',component:AddDishesComponent},
  {path:'catageory',component:CatageoryComponent},
  {path:'dishes',component:DishesComponent},
  {path:'log-in',component:LogInComponent},
  {path:'profile',component:ProfileComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'ordercart',component:OrdercartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'update-profile/:Id',component:UpdateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
