import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class OrderService{
    baseUrl = environment.SERVER_URL;
    constructor(private http:HttpClient){

    }    



    createOrder(){
        console.log('create order')
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1emFpZmFqYW1lZWwyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4ODE2NzE4LCJleHAiOjE2MDg4NzY3MTh9.WRIINsTOzf1M0FOcIapi1rVi2O7mjyNO2N-VkY9pK5o')

        return this.http.post(this.baseUrl + 'orders/create-order', { customerId:1},{
            headers
        });
    }
}