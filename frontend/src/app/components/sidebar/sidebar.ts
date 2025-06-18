import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [RouterLink],
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements OnInit {
  userData: any;

  constructor(private router: Router){}

  ngOnInit(): void {
    const data = sessionStorage.getItem("userData");
    this.userData = data ? JSON.parse(data) : null;
    console.log(this.userData);
  }

  Logout(){
    console.log("Loging Out")
    sessionStorage.removeItem("userData");
    this.router.navigate([''])
  }
}
