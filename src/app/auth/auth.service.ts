import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './login/user.model';
import { tap } from 'rxjs/operators';


export interface AuthResponseData {
    email: string;
    id: number;
    access_token: string;
    tokenExpirationDate: Date;
}



@Injectable({providedIn:'root'})
export class AuthService{

    user = new Subject<User>();
    constructor(private http:HttpClient){ }

    signUp(name:string,email:string, password:string){
        return this.http.post('http:localhost:3000/api/auth/sign-up',{name, email, password});
    }

    login(email:string, password:string){
        return this.http.post<AuthResponseData>('http://localhost:3000/api/auth/login',{email, password})
        .pipe(tap(resData => {
            this.handleAuthentication(resData.email,resData.id, resData.access_token, resData.tokenExpirationDate)
        }));

    }

    handleAuthentication(email:string, id:number, token:string, expireDate:Date){
        const user = new User(email, id, token, expireDate);
        this.user.next(user);
    }
}