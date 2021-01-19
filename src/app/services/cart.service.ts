import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, pipe, Subject } from "rxjs";
import { exhaustMap, map, take } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { Cart } from "../models/cart.model";

@Injectable({
    providedIn:'root'
})
export class CartService{

    cartItem;
    cart = new BehaviorSubject<Cart | null>(null);
    serverUrl =environment.SERVER_URL;
    constructor(private http:HttpClient, private authService:AuthService){

    }
    


    getCartItems(){
         this.http.get<Cart>(this.serverUrl + 'cart/').subscribe(res => {
             console.log(res)
            if(!!res){
                this.cartItem = res;
                this.cart.next(res);
            }
            return res;
        }, err => {
            console.log(err)
        });
    }

 

    addItemToCart(productId:number){
        
        this.http.post<any>(this.serverUrl + 'cart',{ productId}).subscribe(res => {
            this.getCartItems();
        },(err) => {
            console.log(err)
        });
    }   

    clearCart(id:number){
        return this.http.delete(this.serverUrl + 'cart/' + id).subscribe(res => {

        if(!!this.cartItem && this.cartItem.productToCart.length <= 1){
            this.cart.next(null);
        }else{
        
            this.cartItem.productToCart = this.cartItem.productToCart.filter(item => item.productToCartId !== id)
        }
        })
    }

    updateCartItemCount(productToCartId, quantity){
        return this.http.patch(this.serverUrl + 'cart/update-cart/'+productToCartId,{ quantity })
        .subscribe(res => {
            this.getCartItems();

        },error => {
        })
    }

    clearLocalCart(){
        this.cartItem = null;
        this.cart.next(null)
    }
}