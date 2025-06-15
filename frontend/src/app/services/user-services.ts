import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(private http:HttpClient) { }

  signupUser(data: any){
    return this.http.post<AddUser>('http://localhost:3000/user/create', data);
  }

  loginUser(data: any){
    return this.http.post<SigninUser>('http://localhost:3000/user/login',data)
  }
}

export class AddUser {
  fullName!: string;
  email!: string;
  phoneNumber!: number;
  gender?: 'Male' | 'Female' | 'Other';
  password!: string;
  imageUrl!: string;
  isAdmin!: boolean;
}

export class SigninUser {
  email!: string;
  password!: string;
}