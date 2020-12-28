import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class AdminOrderDetailsComponent implements OnInit {

  orderDetail = null;
  fetched:boolean = false;
  constructor(private route:ActivatedRoute, private orderService:OrderService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderDetails(id).subscribe(res => {
      this.fetched = true;
      this.orderDetail = res;
    }, error => {
      console.log(error)
    })

  }

}
