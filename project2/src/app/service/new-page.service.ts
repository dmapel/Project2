import { Pages } from './../models/page';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CreatePageComponent } from '../create-page/create-page.component';

@Injectable({
  providedIn: 'root'
})
export class NewPageService {
  //The page's elements.
  static theme: string;
  // Page.
  static page: Pages;
  private createPage: CreatePageComponent;

  constructor(private http: HttpClient) { }

  //Set the current theme.
  setTheme(t: string) {
    NewPageService.theme = t;
  }
  //Method to store a page's theme.
  getTheme() {
    return NewPageService.theme;
  }
  // Method to store a page.
  setPage(page) {
    NewPageService.page = page;
  }
  //Method to get current page.
  getCurrentPage() {
    return NewPageService.page;
  }

}
