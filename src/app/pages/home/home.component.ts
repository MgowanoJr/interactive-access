import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/index';
import * as fromUsersActions from '../../store/actions/users.actions';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.loadUsers();
  }
}
