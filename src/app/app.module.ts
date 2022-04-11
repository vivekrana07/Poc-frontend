import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatageoryComponent } from './catageory/catageory.component';
import { DishesComponent } from './dishes/dishes.component';
import { AddCatageoryComponent } from './add-catageory/add-catageory.component';
import { AddDishesComponent } from './add-dishes/add-dishes.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { OrdercartComponent } from './ordercart/ordercart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatageoryComponent,
    DishesComponent,
    AddCatageoryComponent,
    AddDishesComponent,
    LogInComponent,
    SignUpComponent,
    ProfileComponent,
    OrdercartComponent,
    CheckoutComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
