import { NewPage } from './../models/new-page';
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
  setPage(page: Page) {
    NewPageService.page = page;
  }
  //Method to get current page.
  getCurrentPage() {
    return NewPageService.page;
  }

  //Method to create new page.
  createNewPage(pageId: number, creatorId : number, title: string, summary: string, body: string) {
    return this.http.post<Page>(environment.apiUrl + '/create/page' ,{pageId, creatorId, title, summary, body});
  }

  //Method to update a page.
  updatePage( pageId : number, title: string, summary: string, body: string) {
    return this.http.put<Page>(environment.apiUrl + '/edit/page' ,{ title, summary, body, pageId});
  }

  //Get all pages for a certain user.
  getUserPages(pageId : number) {
    return this.http.get<Page[]>(environment.apiUrl + `/page/${pageId}`);
  }

}
