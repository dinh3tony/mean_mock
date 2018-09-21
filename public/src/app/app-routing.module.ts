import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { ShowReviewComponent } from './show-review/show-review.component';
import { NewReviewComponent } from './new-review/new-review.component';

const routes: Routes = [
  {path: 'movies', component: ShowComponent, children: [
    {path: 'new', component: CreateComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'showMovie/:id', component: ShowReviewComponent},
    {path: 'review/new/:id', component: NewReviewComponent},
    {path: '', pathMatch:'full', component: ShowAllComponent}
  ]},
  {path: '', pathMatch:'full', redirectTo:'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
