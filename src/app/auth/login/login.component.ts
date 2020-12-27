import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid) return;
    const {email, password} = form.value;
    this.authService.login(email, password).subscribe(res => {
      console.log(res)
      this.router.navigate(['/']);
      form.reset();
    }, error => {
      console.log(error)
    })

  }

}
