import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  successMessage:string;
  errorMessage:string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const { name, email, password, confirmPassword } = form.value;
    if(password !== confirmPassword) return;

    this.authService.signUp(name,email, password).subscribe(res => {
      this.successMessage = 'Account Created. Please verify your Account';
      this.errorMessage ='';
      form.reset();
    }, error => {
      this.errorMessage = error;
      form.reset();
    })


  }

}
