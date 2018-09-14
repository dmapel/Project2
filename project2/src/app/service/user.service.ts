import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<User> {
    console.log('[LOG] - In UserService.getUserByUsername()');
    return this.http.post<User>(environment.apiUrlLogin + 'users?username=' + username, HTTP_OPTIONS);
  }

  register(user: User): Observable<User> {
    console.log('[LOG] - In UserService.register()');
    return this.http.post<User>(environment.apiUrlLogin + 'users', JSON.stringify(user), HTTP_OPTIONS);
  }

  updateInfo(user: User): Observable<User> {
    console.log('[LOG] - In UserService.updateInfo()');
    return this.http.put<User>(environment.apiUrlUpdate + `users/${user.uId}`, JSON.stringify(user),  HTTP_OPTIONS);
  }

  getAllPages() {
    return this.http.get('http://ec2-18-188-229-73.us-east-2.compute.amazonaws.com:8080/get/allpages');
  }
}
