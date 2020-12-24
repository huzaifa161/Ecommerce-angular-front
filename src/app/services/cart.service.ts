import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Cart } from "../models/cart.model";

@Injectable({
    providedIn:'root'
})
export class CartService{

    baseUrl =environment.SERVER_URL;
    constructor(private http:HttpClient){

    }
    


    getCartItems(customerId:number):Observable<Cart>{
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1emFpZmFqYW1lZWwyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4ODE2NzE4LCJleHAiOjE2MDg4NzY3MTh9.WRIINsTOzf1M0FOcIapi1rVi2O7mjyNO2N-VkY9pK5o')
        return this.http.get<Cart>(this.baseUrl + 'cart/' + customerId,{
            headers
        });
    }


    addItemToCart(customerId:number, productId:number){
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1emFpZmFqYW1lZWwyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4ODE2NzE4LCJleHAiOjE2MDg4NzY3MTh9.WRIINsTOzf1M0FOcIapi1rVi2O7mjyNO2N-VkY9pK5o')

        return this.http.post(this.baseUrl + 'cart',{customerId, productId},{
            headers
        });
    }   

    clearCart(id:number){
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1emFpZmFqYW1lZWwyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4ODE2NzE4LCJleHAiOjE2MDg4NzY3MTh9.WRIINsTOzf1M0FOcIapi1rVi2O7mjyNO2N-VkY9pK5o')

        return this.http.delete(this.baseUrl + 'cart/' + id,{
            headers
        })
    }
}