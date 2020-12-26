import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class OrderService{
    serverUrl = environment.SERVER_URL;
    constructor(private http:HttpClient){

    }    



    createOrder(){
        console.log('create order')
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1emFpZmFqYW1lZWwyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4ODE2NzE4LCJleHAiOjE2MDg4NzY3MTh9.WRIINsTOzf1M0FOcIapi1rVi2O7mjyNO2N-VkY9pK5o')

        return this.http.post(this.serverUrl + 'orders/create-order', { customerId:1},{
            headers
        });
    }

    getAdminOrders(){
        return this.http.get<[]>(this.serverUrl + 'admin/orders',{
            headers: new HttpHeaders().set('Authorization','Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4OTg2MTk1LCJleHAiOjE2MDkwNDYxOTV9.yUExMFHsg83c8dNXKGjTgWA6i6UpwxyIcRIEIpzCogc')
        })
    }

    getOrderDetails(orderId){
        return this.http.get(this.serverUrl + 'orders/'+ orderId,{
            headers: new HttpHeaders().set('Authorization','Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4OTg2MTk1LCJleHAiOjE2MDkwNDYxOTV9.yUExMFHsg83c8dNXKGjTgWA6i6UpwxyIcRIEIpzCogc')
        });
    }

    getCustomerOrders(){
        return this.http.get<[]>(this.serverUrl + 'orders/all',{
            // headers: new HttpHeaders().set('Authorization','Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imh1emFpZmFqYW1lZWwyQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4OTk2MzU0LCJleHAiOjE2MDkwNTYzNTR9.IzlrzrwPWSS3WaD-DzAithK50J4fRjb33kKxquuHR6E')
        });
    }

}