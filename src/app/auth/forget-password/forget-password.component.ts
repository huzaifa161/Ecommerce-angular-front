import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  errorMessage:string;
  successMessage:string;
  constructor(private authService:AuthService) {

   }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid) return;
    const { email } = form.value;
    this.authService.forgetPassword(email).subscribe(data => {
      this.successMessage = 'Reset Token Send to Email!!'
      this.errorMessage = '';
    }, error => {

      this.errorMessage = error;
      })

  }
}
