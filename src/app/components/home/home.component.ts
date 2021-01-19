import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  categories = [];

  imageUrl = 'http://localhost:3000/';
  
  constructor(private productService:ProductService,private categoryService:CategoryService ,private router:Router, private cartService:CartService) { }

  ngOnInit(): void {
    this.categoryService.getCategoriesAndProducts().subscribe(res => {
      this.categories = res;
    }, error => {
      console.log(error)
    })
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

  addItemToCart(productId:number){
    this.cartService.addItemToCart(productId);

  }

}
