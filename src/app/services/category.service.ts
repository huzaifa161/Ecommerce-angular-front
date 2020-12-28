import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class CategoryService{
    serverUrl = environment.SERVER_URL;

    constructor(private http:HttpClient){

    }
    getCategories(){
        return this.http.get<[]>(this.serverUrl + 'category');
    }
    getCategoriesAndSub(){
        return this.http.get<[]>(this.serverUrl + 'category/sub');
    }

    addCategory(formData){
        return this.http.post(this.serverUrl + 'admin/add-new-category',formData,{
           headers: new HttpHeaders().set('Authorization','Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMTIzQGdtYWlsLmNvbSIsInN1YiI6MSwiaWF0IjoxNjA4OTg2MTk1LCJleHAiOjE2MDkwNDYxOTV9.yUExMFHsg83c8dNXKGjTgWA6i6UpwxyIcRIEIpzCogc') 
        });
    }


    getProductsByCategories(catId){
        return this.http.get<[]>(this.serverUrl + 'category/' + catId);
    }

}