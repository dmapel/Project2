import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
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
  static currentUser: User;

  constructor(private http: HttpClient) { }
  //Gets the user information by the username and password. 
  getUserByUsername(username: string, password: string) {
    console.log('[LOG] - In UserService.getUserByUsername()');
    console.log(username);
    console.log(password);
    console.log('LOG - Looking in database.....');
    return this.http.post<User>(environment.apiUrlLogin, { username, password });
  }

  register(user: User): Observable<User> {
    console.log('[LOG] - In UserService.register()');
    return this.http.post<User>(environment.apiUrlLogin + 'user', JSON.stringify(user), HTTP_OPTIONS);
  }

  updateInfo(user: User): Observable<User> {
    console.log('[LOG] - In UserService.updateInfo()');
    return this.http.put<User>(environment.apiUrlUpdate + `users/${user.uId}`, JSON.stringify(user), HTTP_OPTIONS);
  }

  //Sets the current user.
  setCurrentUser(user: User) {
    UserService.currentUser = user;
}

//Gets the current user.
getCurrentUser() {
  return UserService.currentUser;
}
}
