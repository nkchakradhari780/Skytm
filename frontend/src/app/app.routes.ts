import { Routes } from '@angular/router';
import { LoginForm } from './components/login-form/login-form';
import { SignupForm } from './components/signup-form/signup-form';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    { path: '', redirectTo: '/LoginPage', pathMatch: 'full' },
    { path: 'LoginPage', component: LoginForm },
    { path: 'SignupPage', component: SignupForm },
    // { path: 'Dashboard', component: Dashboard },
    { path: 'Dashboard/:id', component: Dashboard },
    { path: '**', component: PageNotFound }
];
