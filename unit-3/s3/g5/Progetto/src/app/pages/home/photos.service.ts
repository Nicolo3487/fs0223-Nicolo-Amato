import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './models/photos';
import { catchError } from "rxjs/operators"
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PhotosService {
  baseURL = "https://jsonplaceholder.typicode.com"

  favoritesSub = new Subject<number>()
  favoritesCounter = 0
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Photo[]>(`${this.baseURL}/photos`).pipe(catchError(err =>{
      return throwError(this.getErrorMess(err.status))
    }))
  }

  delete(id:number){
    return this.http.delete(`${this.baseURL}/photos/${id}`).pipe(catchError(err=>{
      return throwError(this.getErrorMess(err.status))
    }))
  }

  addFavorite(){
    this.favoritesCounter ++
    this.favoritesSub.next(this.favoritesCounter)
  }

  private getErrorMess(status:number){
    let mess= ''
    switch (status) {
      case 404:
        mess = 'errore nella chiamata'
        break;
    
      default:
        mess = 'qualcosa non va controlla la connessione'
        break;
    }
    return mess
  }
}