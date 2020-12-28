export interface Order {
    id:number;
    order_date:string;
    order_status:string;
    total_amount: Number;
    productToOrder: [{
        productToOrderId:number;
        productId: Number,
        orderId: Number,
        total:number;
        quantity:1;
        product:{
            productName:string;
            image_1:string;
        }
    }];
}

