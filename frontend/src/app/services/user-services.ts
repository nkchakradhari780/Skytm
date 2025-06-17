import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  public walletAmount!: number;

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

  sendMoney(data: SendMoneyModel): Observable<Response> {
    return this.http.post<Response>('https://skytm-api.azurewebsites.net/api/Transactions/pay', data)
  }

  getTransactions(data: string): Observable<TransactionsResponse> {
    return this.http.get<TransactionsResponse>('https://skytm-api.azurewebsites.net/api/Transactions/history', {
      params: { phoneNumber: data }
    });
  }

  deleteAllTransactions(data: string): Observable<TransactionsResponse> {
    return this.http.delete<TransactionsResponse>('https://skytm-api.azurewebsites.net/api/Transactions/history', {
      params: { phoneNumber: data }
    });
  } 

  deleteTransaction(data: number): Observable<TransactionsResponse> {
    return this.http.delete<TransactionsResponse>('https://skytm-api.azurewebsites.net/api/Transactions/DeleteTransectionById',{
      params: {tid: data}
    })
  }

  getWalletBalance(data: number): Observable<Response> {
    return this.http.get<Response>('https://skytm-api.azurewebsites.net/api/Users/balance',{
      params: {phoneNumber: data}
    })
  }

  getUserBasicList(): Observable<UserBasicListResponse> {
    return this.http.get<UserBasicListResponse>('https://skytm-api.azurewebsites.net/api/Users/basic-list')
  }
}

export class AddUser {
  username!: string;
  email!: string;
  phoneNumber!: string;
  gender?: 'Male' | 'Female' | 'Other';
  password!: string;
  confirmPassword!: string;
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

export class SendMoneyModel {
  senderPhoneNumber!: string;
  receiverPhoneNumber!: string;
  amount!: number;
}

export class TransactionsResponse {
  result!: Array<{
    transactionId: number;
    userId: number;
    receiverId: number;
    receiverName: string;
    receiverPhoneNumber: string;
    transactionType: string;
    transactionDate: string;
    initialAmount: number;
    transferAmount: number;
  }>;
  response!: string;
  responseCode!: string;
}

export class UserBasicListResponse {
  result!: Array<{
    userId: number;
    username: string;
    phoneNumber: string;
  }>
  response!: string;
  responseCode!: string;
}