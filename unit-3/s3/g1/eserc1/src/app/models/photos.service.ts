import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos'

  constructor( private http:HttpClient) { }

    getPhotos(){
      return this.http.get<Photos[]>(this.apiUrl).pipe(map((ph,i) => {
        if (i >= 10){
          return ph
        }
        return
        }))
    }
}

