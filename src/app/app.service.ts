import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  authenticated = false;
  constructor(private httpClient: HttpClient) { }
  authenticate(credentials, callback){
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
  } : {});
  this.httpClient.get('http://localhost:9090/login/user', {headers: headers}).subscribe(response => {

     
      if (response['username']) {
          this.authenticated = true;
      } else {
          this.authenticated = false;
      }
      return callback && callback();
  });
  }
}
