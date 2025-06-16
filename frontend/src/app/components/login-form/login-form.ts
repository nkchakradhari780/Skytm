import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserServices } from '../../services/user-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginUserModel: any = {};

  constructor(private userService: UserServices, private router: Router) { }

  data: any;

  onSubmit() {
    
    this.userService.loginUser(this.loginUserModel).subscribe({
      next: (response: any) => {
        const userId = response.result.userId;

        console.log("User LoggedIn Successfully: " , userId)
        sessionStorage.setItem("userData",JSON.stringify(response.result));
        this.router.navigate(['/Dashboard',userId])
      },
      error: (err: any) => {
        console.error("Error Login User:", err.error.message);
        alert("Failed to Login User: "+ err.error.message);
      }
    })
  }
}
