import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Page } from '../models/page';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
page : Page
  constructor(private http : HttpClient, ) { }

//Gets all pages.
getAllPages() {
 return this.http.get<Page[]>(environment.apiUrl + '/get/allpages');
}

getPage(pageId: number) {
 return this.http.get<Page>(environment.apiUrl + '/page/' + pageId);
}

getSinglePages(uId: number) {
 return this.http.get<Page[]>(environment.apiUrl + '/user/pages/' + uId);
}

getAllUsers() {
 return this.http.get<User>(environment.apiUrl + '/get/allusers');
}


}
