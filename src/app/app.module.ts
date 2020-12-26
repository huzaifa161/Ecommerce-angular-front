import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { ProductComponent } from './components/product/product.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { ProductsComponent } from './admin/products/products.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { AdminOrdersComponent } from './admin/orders/orders.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { AdminOrderDetailsComponent } from './admin/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ThankyouComponent,
    ProductComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AddProductComponent,
    AddCategoryComponent,
    AdminHomeComponent,
    AdminHeaderComponent,
    ProductsComponent,
    CategoriesComponent,
    AdminOrdersComponent,
    AdminAuthComponent,
    AdminOrderDetailsComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
