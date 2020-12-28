import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-products',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders = [];

  constructor(private orderService:OrderService) {

  }

  ngOnInit(): void {
    this.orderService.getAdminOrders().subscribe(orders => {
      this.orders = orders;
      console.log(orders)
    }, error => {

    })
  }

  getOrderDate(date){
    return new Date(Number(date)).toString()
  }
  updateOrderStatus(orderId,status){
    this.orderService.updateOrderStatus(orderId, status).subscribe(res => {
      console.log('updated')
    }, error => {
      console.log('update failed')
    })

  }
}
