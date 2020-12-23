import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if(!form.valid) return;
    const {email, password} = form.value;
    this.authService.login(email, password).subscribe(res => {
        form.reset();
        console.log(res)
    }, error => {
      console.log(error)
    })

  }

}
