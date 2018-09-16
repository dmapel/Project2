import { Page } from './../models/page';
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
  static page: Page;
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

  //Method to create new page.
  createNewPage(creatorId : number, title: string, summary: string, body: string) {
    return this.http.post<Page>(environment.apiUrl + '/create/page' ,{creatorId, title, summary, body});
  }

  //Method to update a page.
  updatePage(creatorId : number, title: string, summary: string, body: string) {
    return this.http.post<Page>(environment.apiUrl + '/edit/page' ,{creatorId, title, summary, body});
  }

}
