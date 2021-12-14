import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  isLogged: any;
  admin: any;

  constructor(private cartService: CartService,
    private loginRegisterService: LoginRegisterService) { }

  ngOnInit(): void {
     let userId = localStorage.getItem("usuarioId");
     
    if(!userId || userId == "")
      this.isLogged = false;
    else{
      this.isLogged = true;
       this.loginRegisterService.getUserById(userId).subscribe((usuario)=>{
       this.user= usuario; 
       this.admin = this.user.admin;
       console.log(this.user)
      });
    }
  }

  toggleCartSidenav(){
    this.cartService.toggleCartSidenav();
  }

}
