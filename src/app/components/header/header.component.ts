import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CategoryService} from '../../services/category.service';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy{

    private userSub:Subscription;
    isAuthenticated = false;
    categories:any = [];
    user;
    constructor(private categoryService:CategoryService, private authService:AuthService, private router:Router){

    }
    ngOnInit():void{

        this.categoryService.getCategoriesAndSub().subscribe(cat => {
            this.categories = cat;
        });

        this.userSub = this.authService.user.subscribe(user => {
            this.user = user;
            return this.isAuthenticated = !!user
        });
    }

    logoutUser(){
        this.authService.logout();
        this.router.navigate(['/']);
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}