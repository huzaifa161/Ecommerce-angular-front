import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Role } from 'src/app/models/Role';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit,OnDestroy {

  isAuthenticated:boolean = false;
  userSub:Subscription;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      if(user && user.role === Role.Admin){
        this.isAuthenticated = !!user;
        console.log(user)
      }
    })
  }


  logout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
