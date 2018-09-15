import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Page } from '../models/page';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }


getAllPages() {
 return this.http.get<Page>(environment.apiUrl + '/get/allpages');
}

getAllUsers() {
 return this.http.get<User>(environment.apiUrl + '/get/allusers');
}

}
