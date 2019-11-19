import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private users: User[] = [];
  private Url = 'api/users';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers().subscribe((data:User[])=>{
                                                    this.users= data;
                                                    console.log(this.users);
                                                 });
  }

}

