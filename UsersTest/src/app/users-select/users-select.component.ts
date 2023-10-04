import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from '../services/db.service';
import { User } from '../models/User';

@Component({
  selector: 'app-users-select',
  templateUrl: './users-select.component.html',
  styleUrls: ['./users-select.component.scss'],
})
export class UsersSelectComponent implements OnInit {
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {}
}
