import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterLink],
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements OnInit {
  userData: any;

  ngOnInit(): void {
    const data = sessionStorage.getItem("userData");
    this.userData = data ? JSON.parse(data) : null;
    console.log(this.userData);
  }
}
