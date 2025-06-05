import { Routes } from '@angular/router';
import { ApplicationComponent } from './features/application/application.component';
import { GroupListComponent } from './features/application/group/pages/group-list/group-list.component';
import { AuthComponent } from './features/auth/auth.component';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
    ],
  },
  {
    path: 'app',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        component: GroupListComponent,
      },
    ],
  },
];
