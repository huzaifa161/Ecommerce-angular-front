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
    this.cartService.getCartItems(1).subscribe(cart => {
      this.cart = cart;
      this.cartItems = cart?.productToCart || [];
      console.log(cart)

    });

  }

  removeCartItem(id:number){
    this.cartService.clearCart(id).subscribe(res => {
      console.log(res)
    });
  }

  confirmOrder(){
    this.orderService.createOrder().subscribe(res => {
      console.log(res)
    })    
  }

  updateCartItem(cartItemId,quantity){
    console.log(quantity)
    if(quantity < 0) return;
    this.cartService.updateCartItemCount(cartItemId, quantity).subscribe(res => {
      console.log(res)
    }, error => {
      console.log(error)
    })


  }

}