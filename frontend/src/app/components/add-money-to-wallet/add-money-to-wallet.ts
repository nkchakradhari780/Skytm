import { Component } from '@angular/core';
import { Tmodel, UserServices } from '../../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { escapeRegExp } from '@angular/compiler';

@Component({
  selector: 'app-add-money-to-wallet',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-money-to-wallet.html',
  styleUrl: './add-money-to-wallet.css'
})
export class AddMoneyToWallet {

  addMoneyModel: Tmodel = new Tmodel();


  constructor(private userService: UserServices) { }

  data: any;

  onSubmit() {
    this.userService.addToWallet(this.addMoneyModel).subscribe((data) => {
      if (data.response === "Registered Successfully !!") {
        alert(data.response);
        alert("Successful");
      }
      else {
        alert(data.response)
      }
    })
  }
}
