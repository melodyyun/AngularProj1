//reuseable for all the other components, can be used to get data from api and use it in any of the other components
import { Injectable } from '@angular/core';
//angular http client is used to communicate with apis
import { HttpClient } from '@angular/common/http';
//use to connect to api

@Injectable({
  providedIn: "root"
})
export class DataService {
  //need to refer HttpClient back to the app.module.ts to use it(aka import it there as well)

  //creating instance of the http client through dependency interjection
  //can create dependency interjection in the parameters.
  constructor(private http: HttpClient) {}

  //custom method
  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  //api call for single user
  getUser(userId) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + userId);
  }

  //step one define the url
  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
