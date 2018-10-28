import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/internal/operators';
import { UsersService } from '../../services/users.service';
import { Users } from '../models/users.model';
import * as fromUsersActions from '../actions/users.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UsersService) {}
}
