import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Users } from '../models/users.model';
import { ErrorMessage } from '../../core';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersFail = '[Users] Load Users Failed',
  UpsertUsers = '[Users] Upsert Users',
  AddUsers = '[Users] Add Userss',
  UpsertUserss = '[Users] Upsert Userss',
  UpdateUsers = '[Users] Update Users',
  UpdateUserss = '[Users] Update Userss',
  DeleteUsers = '[Users] Delete Users',
  DeleteUserss = '[Users] Delete Userss',
  ClearUserss = '[Users] Clear Userss'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
  constructor(public users: Users[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionTypes.LoadUsersFail;
  constructor(public error: ErrorMessage) {}
}

export class UpsertUsers implements Action {
  readonly type = UsersActionTypes.UpsertUsers;

  constructor(public payload: { users: Users }) {}
}

export class AddUsers implements Action {
  readonly type = UsersActionTypes.AddUsers;

  constructor(public users: Users) {}
}

export class UpsertUserss implements Action {
  readonly type = UsersActionTypes.UpsertUserss;

  constructor(public payload: { userss: Users[] }) {}
}

export class UpdateUsers implements Action {
  readonly type = UsersActionTypes.UpdateUsers;

  constructor(public payload: { users: Update<Users> }) {}
}

export class UpdateUserss implements Action {
  readonly type = UsersActionTypes.UpdateUserss;

  constructor(public payload: { userss: Update<Users>[] }) {}
}

export class DeleteUsers implements Action {
  readonly type = UsersActionTypes.DeleteUsers;

  constructor(public payload: { id: string }) {}
}

export class DeleteUserss implements Action {
  readonly type = UsersActionTypes.DeleteUserss;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearUserss implements Action {
  readonly type = UsersActionTypes.ClearUserss;
}

export type UsersActions =
  | LoadUsers
  | LoadUsersFail
  | UpsertUsers
  | AddUsers
  | UpsertUserss
  | UpdateUsers
  | UpdateUserss
  | DeleteUsers
  | DeleteUserss
  | ClearUserss;
