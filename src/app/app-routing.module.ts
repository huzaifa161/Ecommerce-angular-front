import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'sign-up', component: SignupComponent
},
{
  path: 'product/:id', component: ProductComponent
},
{
  path: 'cart', component: CartComponent
},

{
  path: 'thankyou', component: ThankyouComponent
},{
  path:'forget-password',component:ForgetPasswordComponent
},{
  path:'password-reset/:token', component:ResetPasswordComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
