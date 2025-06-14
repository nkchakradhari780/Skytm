import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { TransactionTable } from "../transaction-table/transaction-table";

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, Header, Footer, TransactionTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
