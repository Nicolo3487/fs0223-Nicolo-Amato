import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './2_pages/home/home.component';
import { TodoComponent } from './2_pages/todo/todo.component';
import { TodoCompleteComponent } from './2_pages/todo-complete/todo-complete.component';


const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'todo-complete',
    component: TodoCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
