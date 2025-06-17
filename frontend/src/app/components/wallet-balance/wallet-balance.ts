import { Component, DoCheck, OnInit } from '@angular/core';
import { UserServices } from '../../services/user-services';

@Component({
  selector: 'app-wallet-balance',
  imports: [],
  templateUrl: './wallet-balance.html',
  styleUrl: './wallet-balance.css'
})
export class WalletBalance implements DoCheck{

  constructor(private userService: UserServices) {}
  userData: any;
  amount!: number;

  ngDoCheck() {
    const data = sessionStorage.getItem("userData");
    this.userData = data ? JSON.parse(data) : null;

    if (this.userData?.phoneNumber) {
      this.userService.getWalletBalance(this.userData.phoneNumber).subscribe(
        (response) => {
          if(response.response === "Record fetched Successfully !!"){
            console.log("Wallet Response: ",response.result.amount);
            this.amount = response.result.amount;
            console.log("Wallet Response amount: ",this.amount);
          } else {
            alert("Error Fetching User Amount")
          }
        }, 
        (error) => {
          console.log("Wallet Balance Fetcing Error: ",error);
          alert("Failde to fetch walletBalance");
        }
      )
    }
    else {
      alert("User Not Found.")
    }
  }
  

  
}
