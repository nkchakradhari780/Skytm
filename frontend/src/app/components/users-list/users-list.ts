import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserServices } from '../../services/user-services';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
  constructor(private userService: UserServices) {}

  users: any[] = [];

  ngOnInit(){
    this.userService.getUserBasicList().subscribe(
      (response) => {
        if(response.response === "Balance fetched Successfully !!"){
          this.users = response.result;
            console.log("Users List fetched successfully", this.users);
          } else {
            alert("Error fetching UsersList: " + response.response);
        }
      }
    )
  }
}
