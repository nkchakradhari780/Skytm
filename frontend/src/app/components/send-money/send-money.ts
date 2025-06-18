import { Component } from '@angular/core';
import { SendMoneyModel, UserServices } from '../../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-money',
  imports: [FormsModule, CommonModule],
  templateUrl: './send-money.html',
  styleUrl: './send-money.css'
})
export class SendMoney {
  userData: any;
  usersList: any;
  sendMoneyModel: SendMoneyModel = new SendMoneyModel();

  constructor(private userService: UserServices) { }


  ngOnInit(): void {
    const data = sessionStorage.getItem("userData");
    this.userData = data ? JSON.parse(data) : null;
    if (this.userData && this.userData.phoneNumber) {
      this.sendMoneyModel.senderPhoneNumber = this.userData.phoneNumber;
    }

    this.userService.getUserBasicList().subscribe(
      (response) => {
        if (response.response === "Balance fetched Successfully !!") {
          this.usersList = response.result;
          // console.log("Users List Fetched successfully In SendMoney", this.usersList);
        } else {
          alert("Error fetching UsersList: " + response.response);
        }
      },
    )

  }
  data: any;

  onSubmit() {
    this.userService.sendMoney(this.sendMoneyModel).subscribe((data) => {
      if (data.response === "Amount transfered successfully") {
        alert("Money Send Successfully")
        console.log(data.response)
      }
      else {
        alert(data.response);
      }
    })
  }
}
