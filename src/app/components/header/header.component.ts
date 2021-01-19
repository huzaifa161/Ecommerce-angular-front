import { ThisReceiver } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from "src/app/services/cart.service";
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
    cartSub:Subscription;
    cart = null;
    prev= false;
    prevUrl=null;
    prevMenu=[];
    constructor(private categoryService:CategoryService,
         private authService:AuthService, 
         private router:Router, 
         private cartService:CartService){

    }
    ngOnInit():void{

        this.categoryService.getCategoriesAndSub().subscribe(cat => {
            this.categories = cat;
            this.prevMenu = cat;
        });

        this.userSub = this.authService.user.subscribe(user => {
            this.user = user;
            this.isAuthenticated = !!user && user.role ==='Customer';
            if(this.isAuthenticated){

            }
        });
        this.cartSub = this.cartService.cart.subscribe(cart => {
            this.cart = cart;
        });
    }

    logoutUser(e){
        this.authService.logout();
        this.cartService.clearLocalCart()
        this.router.navigate(['/']);
    }

    ngOnDestroy(){
        this.userSub.unsubscribe();
        this.cartSub.unsubscribe();
    }

    arr = [{
        id:1,
        child:[{id:23},{id:34}]
    },{
        id:2,
        child:[{id:33},{id:89}]
    },{
        id:3,
        child:[]
    }]
    

    getCategories(id,categories):any{
        let newCategories = [];
        for(let cat of categories){
            if(cat.id === id && cat?.children?.length){
                return [...cat.children];
            }else if(cat?.children?.length){
                newCategories = this.getCategories(id,cat.children)
            }
        }
        return [...newCategories]
    }

        findSubCat(id){
            return this.categories.filter(prod => prod.id === id)[0]
        }
      onMenuChange(e,id){
        e.preventDefault();

          const cat = this.getCategories(id, this.prevMenu);
          if(cat.length){
            this.categories = cat;
            this.prevUrl = id;
            this.prev = true
          }
      }

      backUrl(e,id){
          e.preventDefault();
        if(this.prevMenu.filter(cat => cat.id === id).length){
            this.categories = this.prevMenu;
            this.prevUrl = null;
            this.prev = false;
            this.router.navigate(['categories/'+id])

        }else{
            this.onMenuChange(e,id)
        }
      }
}