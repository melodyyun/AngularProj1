import { Component, OnInit } from '@angular/core';
//step 2 import
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

  animations: [
    trigger("listStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-15px)" }),
            stagger(
              "50ms",
              animate(
                "550ms ease-out",
                style({ opacity: 1, transform: "translateY(0px)" })
              )
            )
          ],
          { optional: true }
        ),
        query(":leave", animate("50ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
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
