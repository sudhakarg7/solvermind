import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {
  }

  public base = 'https://reqres.in/';

  login(data: Object) {
    return this.post('api/login', data);
  }

  getProfileList(page = 1) {
    return this.get(`api/users?page=${page}`);
  }



  post(url: string, params: any) {
    try {
      let data = params;
      let headers: any = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      return this.http.post(this.base + url, data, headers)
        .toPromise()
        .then()
        .catch();
    } catch (error) {
      console.log(error);
    }

  }

  get(url: string) {
    try {
      return this.http.get(this.base + url);
    } catch (error) {
      console.log(error);
    }
  }
}
