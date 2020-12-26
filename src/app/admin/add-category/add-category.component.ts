import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  image:File;
  errorMessage = '';
  successMessage = '';
  categories:[] = [];
  constructor(private categoryService:CategoryService) {

   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  onSubmit(form:NgForm){
    if(!form.valid) return;

    const { categoryName, categoryDesc, parent} = form.value;
    
    const formData = new FormData();
    formData.set('categoryName',categoryName);
    formData.set('categoryDesc',categoryDesc);
    formData.set('parent',parent);
    formData.set('image', this.image)
    console.log(formData.get('image'))
    this.categoryService.addCategory(formData).subscribe(() => {
      form.reset();
      this.successMessage = 'Record Inserted Successfully';
    }, error => {
      form.reset();
      this.errorMessage = 'An Unknown Error Ocurred';
    })

  }

  onFileSelect(event){
        this.image = event.target.files[0];
        console.log(event.target.files[0])
  }
}