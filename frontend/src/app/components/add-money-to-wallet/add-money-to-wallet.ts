import { Component, DoCheck, OnInit } from '@angular/core';
import { Tmodel, UserServices } from '../../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WalletBalance } from "../wallet-balance/wallet-balance";

@Component({
  selector: 'app-add-money-to-wallet',
  imports: [FormsModule, CommonModule, WalletBalance],
  templateUrl: './add-money-to-wallet.html',
  styleUrl: './add-money-to-wallet.css'
})
export class AddMoneyToWallet implements OnInit {

  addMoneyModel: Tmodel = new Tmodel();

  constructor(private userService: UserServices) { }
  amount!: number;


  data: any;
  userData: any;

  ngOnInit(): void {
    const data = sessionStorage.getItem("userData");
    this.userData = data ? JSON.parse(data) : null;
    if (this.userData && this.userData.phoneNumber) {
      this.addMoneyModel.phoneNumber = this.userData.phoneNumber;
    }
  }

  onSubmit() {
    this.userService.addToWallet(this.addMoneyModel).subscribe((data) => {
      if (data.response === "amount added successfully") {
        alert("Successful " + data.response);
      }
      else {
        alert(data.response)
      }
    })
  }

}
