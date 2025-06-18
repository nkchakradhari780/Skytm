import { Component, OnInit } from '@angular/core';
import { TransactionsResponse, UserServices } from '../../services/user-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.html',
  styleUrls: ['./transaction-table.css'],
  imports: [CommonModule]
})
export class TransactionTable implements OnInit {
  data!: TransactionsResponse;
  userData: any;

  constructor(private userService: UserServices) { }

  ngOnInit(): void {
    const data = sessionStorage.getItem("userData");
    this.userData = data ? JSON.parse(data) : null;

    if (this.userData?.phoneNumber) {
      this.userService.getTransactions(this.userData.phoneNumber).subscribe(
        response => {
          if (response.response === "History fetched successfully") {
            this.data = response;
            console.log("History fetched successfully", this.data.result);
          } else {
            alert("Error fetching history: " + response.response);
          }
        },
      );
    } else {
      alert("User phone number not found in session.");
    }
  }


  deleteAllTransactions() {
    if (this.userData?.phoneNumber) {
      console.log(this.userData)
      this.userService.deleteAllTransactions(this.userData.phoneNumber).subscribe(
        (response) => {
          if (response.response === "Transaction history deleted") {
            this.data = response;
            console.log("History deleted successfully", this.data.result)
            alert("History Deleted Successfully")
          } else {
            alert("Error Deleting History" + response.response);
          }
        },
      )
    } else {
      alert("User phone number not found in session.");
    }
  }

  deleteTransaction(tid: number) {
    console.log("delete Transactioin", tid)
    if (tid) {
      this.userService.deleteTransaction(tid).subscribe(
        (response) => {
          if (response.response === "Transaction record deleted") {
            this.data = response;
            console.log("History deleted of Id: ", tid);
            alert("history of id:" + tid + "deleted")
          } else {
            alert("Error Deleting History" + response.response);
          }
        },
      )
    } else {
      console.log("tid", tid)
      alert("Transaction not found.");
    }
  }

  deleteTran(tid: number) {
    this.userService.deleteTransaction(tid).subscribe((data) =>{
      console.log("New single delete function:",data.response)
    },
    
  )
  }
}
