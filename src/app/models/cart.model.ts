  
import {Product} from "./product.model";

export interface Cart {
    id:number;
    total: Number;
    productToCart: [{
        productId: Number,
        cartId: Number,
        price:number,
        total:number;
        quantity:1;
        product:{
            productName:string;
            image_1:string;
        }
    }];
}

