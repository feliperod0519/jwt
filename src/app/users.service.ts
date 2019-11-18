import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../app/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements InMemoryDbService{

  constructor() { }

  createDb(){
    let people = [
                    new User(1,"Peter Kantroupus","peter.kantroupus@javaman.com","hello"),
                    new User(2,"Manchitas","manchitas@test.com","12345"),
                    { id: 3, name:"Felipe Rod", email:"feliperod0519@gmail.com", password:"54321" }
                 ];
    return { people };
  }
}
