import { Component } from '@angular/core';
import { SendMoneyModel, UserServices } from '../../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-send-money',
  imports: [FormsModule,CommonModule],
  templateUrl: './send-money.html',
  styleUrl: './send-money.css'
})
export class SendMoney {
  sendMoneyModel: SendMoneyModel = new SendMoneyModel();

  constructor(private userService: UserServices) {}

  data: any;

  onSubmit(){
    this.userService.sendMoney(this.sendMoneyModel).subscribe((data) => {
      if(data.response === "Amount transfered successfully") {
        alert("Money Send Successfully")
        console.log(data.response)
      }
      else{
        alert(data.response);
      }
    })
  }

}
