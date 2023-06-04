import { Injectable } from "@angular/core";
import { Todo } from "./todo";

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    apiUrl: string = 'http://localhost:3000/todos'
    private todoArray: Todo[] = [];

    constructor() {}

    /*getTodos():Promise<Todo[]> {
        return fetch(this.apiUrl).then(response => response.json());
    }*/
    getTodosPromise(){
      return new Promise<Todo[]>((resolve) =>{
        setTimeout(() =>{
          resolve(this.todoArray)
        },2000)
      })
    }

    getTodosByStatus(status:boolean): Todo[] {
        return this.todoArray.filter(td => td.completed === status)
    }

    toggleStatus(todo:Todo):void {
      todo.completed = true;

      this.todoArray.forEach((item) => {
        if(item !== todo) {
          item.completed = false
        }
      })
    }

    addTodo(todo:Todo):Promise<Todo> {
      return fetch(this.apiUrl,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(todo)
      }).then(response => response.json())
    }
}    