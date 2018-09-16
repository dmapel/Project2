import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './page/page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewPagesComponent } from './view-pages/view-pages.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'search-bar',
    component: SearchBarComponent
  },
  {
    path: 'create-page',
    component: CreatePageComponent
  },
  {
    path: 'view-users',
    component: ViewUsersComponent
  },
  {
    path: 'view-pages',
    component: ViewPagesComponent
  },
  {
    path: 'admin-profile',
    component: AdminProfileComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
