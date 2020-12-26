import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token:any;
  errorMessage:string;
  successMessage:string;
  tokenValid:boolean = false;
  constructor(private route:ActivatedRoute, private authService:AuthService) { 

  }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get('token');
    this.authService.verifyPasswordToken(token).subscribe(data => {
      this.tokenValid = true;
      this.errorMessage = '';
    }, error => {
      this.tokenValid = false;
      this.errorMessage = error;
    })
  }

  onSubmit(form:NgForm){
    if(!form.valid){ return;}
    const { password, confirmPassword } = form.value;
    if(password !== confirmPassword) return this.errorMessage = 'Password does not Match';

    const token = this.route.snapshot.paramMap.get('token');
    this.authService.resetPassword(token, password, confirmPassword).subscribe(res => {
      this.successMessage = 'Password Changed Successfully'
      this.errorMessage = '';
    }, error => {
      this.errorMessage = error;
    })

  }

}
