import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowAllComponent } from './show-all/show-all.component';

const routes: Routes = [
  {path: 'products', component: ShowComponent, children: [
    {path: 'new', component: CreateComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: '', pathMatch:'full', component: ShowAllComponent}
  ]},
  {path: '', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
