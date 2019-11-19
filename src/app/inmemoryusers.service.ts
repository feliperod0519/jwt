import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUsersService implements InMemoryDbService{

  constructor() { }

  createDb(){
    let users = [
                    new User(1,"Peter Kantroupus","peter.kantroupus@javaman.com"),
                    new User(2,"Manchitas","manchitas@test.com"),
                    { id: 3, name:"Felipe Rod", email:"feliperod0519@gmail.com" },
                    { id: 4, name:"Karen Alga", email:"karen@alga.us" }
                 ];          
    return { users };
  }
}
