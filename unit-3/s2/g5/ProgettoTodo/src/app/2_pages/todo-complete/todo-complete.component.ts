import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todo-complete',
  templateUrl: './todo-complete.component.html',
  styleUrls: ['./todo-complete.component.scss']
})
export class TodoCompleteComponent implements OnInit {

  todoArray: Todo[] = [];
  constructor(private todoSvc: TodoService){}

  ngOnInit(): void {
    this.todoArray = this.todoSvc.getTodosByStatus(true);
  }

  toggleStatus(todo: Todo): void {
    this.todoSvc.toggleStatus(todo);
    this.todoArray = this.todoSvc.getTodosByStatus(true);
  }
}
