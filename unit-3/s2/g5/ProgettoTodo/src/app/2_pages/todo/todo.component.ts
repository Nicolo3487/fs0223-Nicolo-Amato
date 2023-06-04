import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  todoArray: Todo[] = [];
  loading: boolean = true;
  constructor(private todoSvc:TodoService, private http:HttpClient){}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/todos')
    .subscribe(data => {this.todoArray = data;
    })
  }

  getTodos(){
    this.todoSvc.getTodosPromise().then(todoReponse =>{
      this.todoArray = todoReponse;
      this.loading = false;
    })
  }

  toggleStatus(todo:Todo): void {
    this.todoSvc.toggleStatus(todo);
    this.todoArray = this.todoSvc.getTodosByStatus(true);
  }

  todo:Todo = new Todo(0,'',false);

  create(){
    this.todoSvc.addTodo(this.todo)
    .then(response => console.log(response));
  }

}
