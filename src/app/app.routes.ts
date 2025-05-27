import { Routes } from '@angular/router';
import { RequestDeleteAccountFormComponent } from './request-delete-account-form/request-delete-account-form.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'request-delete-account-form',
        component: RequestDeleteAccountFormComponent
    },
    {
        path: '',
        redirectTo: '/request-delete-account-form',
        pathMatch: 'full'
    },
];
