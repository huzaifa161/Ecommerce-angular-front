import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  image_1:File;
  image_2:File;
  image_3:File;
  categories:[] = [];
  successMessage:string;
  errorMessage:string;
  constructor(private categoryService:CategoryService, private productService:ProductService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  onSubmit(form:NgForm){

    const { productName, productDesc, price, quantity, category} = form.value;
    if(!category || !form.valid) return;
    
    const formData = new FormData();
    formData.set('productName',productName);
    formData.set('productDesc',productDesc);
    formData.set('price',price);
    formData.set('quantity',quantity);
    formData.set('category',category);
    formData.set('image_1', this.image_1)

    if(this.image_2) formData.set('image_2', this.image_2)
    if(this.image_3) formData.set('image_3', this.image_3)
    this.productService.addProduct(formData).subscribe(() => {
      this.successMessage = 'Record Inserted SuccessFully';
      this.errorMessage = '';
      form.reset();
    }, error => {
      form.reset();
      this.errorMessage = 'An Unknown Error Ocurred'
    })

  }

  onFileSelect(event,type){
    switch(type){
      case 'image_1':
        this.image_1 = event.target.files[0];
        break;        
      case 'image_2':
        this.image_2 = event.target.files[0];
        break;        
      case 'image_3':
        this.image_3 = event.target.files[0];
        break;        
    }
  }
}
