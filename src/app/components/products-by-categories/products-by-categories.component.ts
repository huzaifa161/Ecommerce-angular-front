import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { combineLatest } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products-by-categories',
  templateUrl: './products-by-categories.component.html',
  styleUrls: ['./products-by-categories.component.css']
})
export class ProductsByCategoriesComponent implements OnInit, OnDestroy {

  products= [];
  imageUrl = 'http://localhost:3000/';
  id;
  sub:Subscription;
  catSubs:Subscription;
  prev:true;
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });

  }


  ngOnInit(): void {
   this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.categoryService.getProductsByCategories(params.get('id')).subscribe(products => {
        this.products = products;
      });
  });


  }

  addItemToCart(productId){

  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }



}
