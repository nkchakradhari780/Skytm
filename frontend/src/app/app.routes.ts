import { Routes } from '@angular/router';
import { LoginForm } from './components/login-form/login-form';
import { SignupForm } from './components/signup-form/signup-form';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Dashboard } from './components/dashboard/dashboard';
import { AddMoneyToWallet } from './components/add-money-to-wallet/add-money-to-wallet';
import { TransactionTable } from './components/transaction-table/transaction-table';
import { SendMoney } from './components/send-money/send-money';
import { UsersList } from './components/users-list/users-list';

export const routes: Routes = [
    { path: '', redirectTo: '/LoginPage', pathMatch: 'full' },
    { path: 'LoginPage', component: LoginForm },
    { path: 'SignupPage', component: SignupForm },
    { path: 'Dashboard/:id', component: Dashboard, children: [
        {path:'',component: TransactionTable},
        {path: 'addToWallet',component: AddMoneyToWallet},
        {path: 'transactions',component: TransactionTable},
        {path: 'sendMoney',component: SendMoney},
        {path: 'userList',component: UsersList}
    ]},
    { path: '**', component: PageNotFound }
];
