import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart;
  cartItems = [];
  imageUrl = 'http://localhost:3000/';

  constructor(private cartService:CartService, private orderService: OrderService){

  }

  ngOnInit(){
    this.cartService.cart.subscribe(cart => {
      this.cart = cart;
      this.cartItems = cart?.productToCart || [];
    });

  }

  removeCartItem(id:number){
    this.cartService.clearCart(id);
  }

  confirmOrder(){
    this.orderService.createOrder().subscribe(res => {})    
  }

  updateCartItem(cartItemId,quantity){
    if(quantity < 0) return;
    this.cartService.updateCartItemCount(cartItemId, quantity);
  }

}