import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../models/page';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
page : Page
  constructor(private http : HttpClient, ) { }

//Gets all pages.
getAllPages() {
  return this.http.get<Page>(environment.apiUrl + '/get/allpages');
}


}
