import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  customers = [];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.getCustomers().subscribe(customers => {
      this.customers = customers
    }, error => {
      console.log(error);
    })
  }

}
