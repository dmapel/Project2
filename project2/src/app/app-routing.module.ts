import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PageComponent } from './page/page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
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
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
