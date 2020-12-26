import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 
  orders = [];

  constructor(private orderService:OrderService) {

  }

  ngOnInit(): void {
    this.orderService.getCustomerOrders().subscribe(orders => {
      this.orders = orders;
      console.log(orders)
    }, error => {
      console.log(error)

    })
  }

  getOrderDate(date){
    return new Date(Number(date)).toString()
  }

}
