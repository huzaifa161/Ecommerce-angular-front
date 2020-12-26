import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AdminOrderDetailsComponent } from './admin/order-details/order-details.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
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
},{
  path:'orders', component:OrdersComponent
},{
  path:'orders/:id', component: OrderDetailsComponent
},{
  path:'admin',component:AdminHomeComponent,
  children:[{
    path:'auth', component:AdminAuthComponent
  },{
    path:'add-product', component:AddProductComponent
  },{
    path:'add-category',component:AddCategoryComponent
  },{
    path:'categories',component:CategoriesComponent
  },{
    path:'products', component:ProductsComponent
  },{
    path:'orders', component:OrdersComponent
  },{
    path:'orders/:id', component:OrderDetailsComponent    
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
