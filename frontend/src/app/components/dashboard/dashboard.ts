import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { TransactionTable } from "../transaction-table/transaction-table";
import { AddMoneyToWallet } from "../add-money-to-wallet/add-money-to-wallet";

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Header, Footer, TransactionTable, AddMoneyToWallet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
