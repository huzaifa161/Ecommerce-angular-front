import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[] =[];

  imageUrl = 'http://localhost:3000/';
  
  constructor(private productService:ProductService, private router:Router, private cartService:CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((prod:Product[]) => {
      this.products = prod;
    })
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

  addItemToCart(productId:number){
    this.cartService.addItemToCart(1,productId).subscribe(res => {
      console.log(res)
    })

  }

}
