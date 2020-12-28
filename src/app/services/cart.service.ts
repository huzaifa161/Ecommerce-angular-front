import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { exhaustMap, take } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { AuthService } from './auth.service';
import { Cart } from "../models/cart.model";

@Injectable({
    providedIn:'root'
})
export class CartService{

    serverUrl =environment.SERVER_URL;
    constructor(private http:HttpClient, private authService:AuthService){

    }
    


    getCartItems(customerId:number):Observable<Cart>{
            return this.http.get<Cart>(this.serverUrl + 'cart/' + customerId);
    }

 

    addItemToCart(customerId:number, productId:number){
 
        return this.http.post(this.serverUrl + 'cart',{customerId, productId});
    }   

    clearCart(id:number){
        return this.http.delete(this.serverUrl + 'cart/' + id)
    }

    updateCartItemCount(productToCartId, quantity){
        return this.http.patch(this.serverUrl + 'cart/update-cart/'+productToCartId,{ quantity })

    }
}