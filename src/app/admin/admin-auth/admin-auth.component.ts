import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(!form.valid) return;
    const {email, password} = form.value;
    console.log(email, password)

    this.authService.loginAdmin(email, password).subscribe(res => {
      console.log(res)
      this.router.navigate(['/admin/products']);
      form.reset();
    }, error => {
      console.log(error)
    })      
  }

}
