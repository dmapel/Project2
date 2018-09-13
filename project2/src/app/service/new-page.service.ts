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
  private theme: string;
  // Page.
  private Page: Pages;
  private createPage: CreatePageComponent;

  constructor(private http: HttpClient) { }

  //Method to store a page's theme.
  getTheme() {
    let s = this.createPage.getSelectedValue();
    return s;
  }
  // Method to store a page.

  //Method to get current page.


}
