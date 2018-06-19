import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components to route to
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

//define routes as an array of objects
const routes: Routes = [
  {
    //initial route like /
    path: "",
    //show which component should show up
    component: UsersComponent
  },
  {
    path: "details/:id",
    component: DetailsComponent
  },
  {
    path: "posts",
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
