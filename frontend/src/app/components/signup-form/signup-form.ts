import { Component } from '@angular/core';
import { AddUser, UserServices } from '../../services/user-services';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
   standalone: true,    
  selector: 'app-signup-form',
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './signup-form.html',
  styleUrls: ['./signup-form.css'],
})
export class SignupForm {

  addUserModel: AddUser = new AddUser()

  constructor(private userService: UserServices, private router: Router) { }

  data: any;

  onSubmit() {
    if (true) {
      this.userService.signupUser(this.addUserModel).subscribe((data) => {
        if(data.response === "Registered Successfully !!"){
          localStorage.setItem("userData",JSON.stringify(data.result));
          this.data = data.result;
          this.router.navigate(['/Dashboard',data.result.userId])
          console.log("Successful")
        }
        else {
          alert(data.response)
        }
      })
    }
    else {
      alert("Password do not match at confirm password field ");
    }
  }
}
