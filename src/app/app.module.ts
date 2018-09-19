import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageComponent } from './page/page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewPagesComponent } from './view-pages/view-pages.component';
import {
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  MatOptionModule,

} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { GetPagesComponent } from './get-pages/get-pages.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { AllPagesComponent } from './all-pages/all-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    PageComponent,
    CreatePageComponent,
    ProfileComponent,
    SearchBarComponent,
    AdminProfileComponent,
    AdminNavbarComponent,
    ViewUsersComponent,
    ViewPagesComponent,
    GetPagesComponent,
    ViewPostComponent,
    AllPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
