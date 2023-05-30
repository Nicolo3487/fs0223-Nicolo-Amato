import { Injectable } from '@angular/core';
import { User } from './users/users';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    apiJson:string = "assest/db.json";
    Users:User[] = [];

    constructor() {
    }
    getUsers():Promise<User[]> {
        return fetch(this.apiJson).then(res => res.json());
    }
}