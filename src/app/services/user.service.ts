import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  signup(data: any) {
    return this.httpClient.post(this.url + '/user/signup', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  forgotPassword(data: any) {
    return this.httpClient.post(this.url + '/user/forgotPassword', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  login(data: any) {
    return this.httpClient.post(this.url + '/user/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  // 28/06/2023 -- Dashboard Page
  checkToken() {
    return this.httpClient.get(this.url + '/user/checkToken');
  }

  // 28/06/2023
  changePassword(data: any) {
    return this.httpClient.post(this.url + '/user/changePassword', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }

  // 01/07/2023
  getUsers() {
    return this.httpClient.get(this.url + '/user/get');
  }

  // 01/07/2023
  // update(data: any) {
  //   return this.httpClient.post(this.update + '/user/update', data, {
  //     headers: new HttpHeaders().set('Content-Type', 'application/json'),
  //   });
  // }

  update(data: any) {
    return this.httpClient.post(this.url + '/user/update', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    });
  }
}
