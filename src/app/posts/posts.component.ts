import { Component, OnInit } from '@angular/core';
//step 2 import
import { DataService } from "../data.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  //declare object
  posts$: Object;

  //make an instance of data service where you're getting api info
  constructor(private data: DataService) { }

  //on init of the app call get post method
  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

}
