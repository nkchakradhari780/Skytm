import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  constructor(private http: HttpClient) { }

  signupUser(data: AddUser): Observable<Response> {
    return this.http.post<Response>('https://skytm-api.azurewebsites.net/api/Auth/signup', data);
  }

  loginUser(data: SigninUser): Observable<Response> {
    return this.http.post<Response>('https://skytm-api.azurewebsites.net/api/Auth/login', data)
  }

  addToWallet(data: Tmodel): Observable<Tresponse> {
    return this.http.post<Tresponse>('https://skytm-api.azurewebsites.net/api/Wallet/add', data)
  }
}

export class AddUser {
  username!: string;
  email!: string;
  phoneNumber!: string;
  gender?: 'Male' | 'Female' | 'Other';
  password!: string;
  imageUrl!: 'Myimage';
  isAdmin: boolean = false;
}

export class SigninUser {
  phoneNumber!: string;
  password!: string;
}

export class Response {
  result!: {
    userId: number;
    amount: number;
    username: string;
    email: string;
    phoneNumber: number;
    gender?: 'Male' | 'Female' | 'Other';
    password: string;
    imageUrl: 'Myimage';
    createDate: 'date'
    isAdmin: boolean;
  };
  response!: string;
  responseCode!: string;
}

export class Tresponse {
  amount!: string;
  response!: string;
  responseCode!: string;
}

export class Tmodel {
  phoneNumber!: string;
  amount!: number;
  submitted: any;
}