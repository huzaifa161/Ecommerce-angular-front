import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  userSub:Subscription;
  constructor(private authService:AuthService, private cartService:CartService){

  }
  ngOnInit(){
    this.authService.autoLogin();
    this.userSub = this.authService.user.pipe().subscribe(user => {
      if(!!user) {
        this.cartService.getCartItems();
 
      }
    })
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
} 
