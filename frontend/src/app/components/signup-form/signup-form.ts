import { Component } from '@angular/core';
import { UserServices } from '../../services/user-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
   standalone: true,    
  selector: 'app-signup-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './signup-form.html',
  styleUrls: ['./signup-form.css'],
})
export class SignupForm {

  addUserModel: any = {};

  constructor(private userService: UserServices) { }

  data: any;

  onSubmit() {
    if (this.addUserModel.password === this.addUserModel.confirmPassword) {
      this.userService.signupUser(this.addUserModel).subscribe({
        next: (response) => {
          this.data = response;
          alert("User Added successfully" + this.data);
        },
        error: (err) => {
          console.log('error adding user:', err);
          alert("faild to add user:");
        }
      })
    }
    else {
      alert("Password do not match at confirm password field ");
    }
  }
}
