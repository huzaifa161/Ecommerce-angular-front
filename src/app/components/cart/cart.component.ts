import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems:any;
  imageUrl = 'http://localhost:3000/';

  constructor(private cartService:CartService, private orderService: OrderService){

  }

  ngOnInit(){
    this.cartService.getCartItems(1).subscribe(items => {
      this.cartItems = items;
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

}