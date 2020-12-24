import { Component, OnInit } from "@angular/core";
import { CategoryService} from '../../services/category.service';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
})
export class HeaderComponent implements OnInit{
    categories:any = [];
    constructor(private categoryService:CategoryService){

    }
    ngOnInit():void{

        this.categoryService.getCategories().subscribe(cat => {
            console.log(cat)
            this.categories = cat;
        })
    }
}