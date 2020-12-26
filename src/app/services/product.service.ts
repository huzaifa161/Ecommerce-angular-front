import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product.model";

@Injectable({
    providedIn:'root'
})
export class ProductService{
    serverUrl = environment.SERVER_URL;

    constructor(private http:HttpClient){

    }
    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.serverUrl + 'products');
    }

    addProduct(formData){
        return this.http.post(this.serverUrl + 'admin/add-new-product',formData,{
            headers: new HttpHeaders().set('Authorization','Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4OTg2MTk1LCJleHAiOjE2MDkwNDYxOTV9.yUExMFHsg83c8dNXKGjTgWA6i6UpwxyIcRIEIpzCogc') 
         });
 
    }
}