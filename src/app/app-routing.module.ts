import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { AdminOrderDetailsComponent } from './admin/order-details/order-details.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductComponent } from './components/product/product.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';

const routes: Routes = [{
  path: '', component: LandingComponent,
  children:[{
    path:'',component:HomeComponent
  },{
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
  }]
},
{
  path:'admin',component:AdminHomeComponent,
  canActivate:[AuthGuard],
  canActivateChild:[AuthGuard],
  data:{roles:['Admin'], path:'admin'},
  children:[{
    path:'auth', 
    component:AdminAuthComponent
  },{
    path:'add-product', 
    component:AddProductComponent,
    data:{roles:['Admin'], path:'admin'}
  },{
    path:'add-category',
    component:AddCategoryComponent,
    data:{roles:['Admin'], path:'admin'}
  },{
    path:'categories',
    component:CategoriesComponent,
    data:{roles:['Admin'], path:'admin'}
  },{
    path:'products', 
    component:ProductsComponent,
    data:{roles:['Admin'], path:'admin'}
  },{
    path:'orders', 
    component:OrdersComponent,
    data:{roles:['Admin'], path:'admin'}
  },{
    path:'orders/:id', 
    component:OrderDetailsComponent,
    data:{roles:['Admin'], path:'admin'}    
  },{
    path:'customers', 
    component:CustomersComponent,
    data:{roles:['Admin'], path:'admin'}
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
