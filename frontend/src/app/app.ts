import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginForm } from "./components/login-form/login-form";
import { UserServices } from './services/user-services';

@Component({
   standalone: true,    
  selector: 'app-root',
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [UserServices],
})
export class App {
  protected title = 'skytm';
}
