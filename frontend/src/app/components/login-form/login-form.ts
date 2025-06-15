import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserServices } from '../../services/user-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [RouterModule, RouterOutlet,CommonModule,FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginUserModel: any = {};

  constructor(private userService: UserServices) { }

  data: any;

  onSubmit() {
    if (!this.loginUserModel.email || !this.loginUserModel.password) {
      alert("Email or Password is required")
      return
    }
    this.userService.loginUser(this.loginUserModel).subscribe({
      next: (response: any) => {
        this.data = response;
        console.log(this.data)
        alert("User LoggedIn Successfully")
      },
      error: (err: any) => {
        console.error("Error Login User:", err.error.message);
        alert("Failed to Login User: "+ err.error.message);
      }
    })
  }
}
