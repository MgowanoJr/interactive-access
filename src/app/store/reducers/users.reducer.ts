import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Users } from '../models/users.model';
import { UsersActions, UsersActionTypes } from '../actions/users.actions';

export interface State extends EntityState<Users> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Users> = createEntityAdapter<Users>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: UsersActions): State {
  switch (action.type) {
    case UsersActionTypes.AddUsers: {
      return adapter.addOne(action.users, state);
    }

    case UsersActionTypes.UpsertUsers: {
      return adapter.upsertOne(action.payload.users, state);
    }

    case UsersActionTypes.UpsertUserss: {
      return adapter.upsertMany(action.payload.userss, state);
    }

    case UsersActionTypes.UpdateUsers: {
      return adapter.updateOne(action.payload.users, state);
    }

    case UsersActionTypes.UpdateUserss: {
      return adapter.updateMany(action.payload.userss, state);
    }

    case UsersActionTypes.DeleteUsers: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UsersActionTypes.DeleteUserss: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UsersActionTypes.LoadUsers: {
      return adapter.addAll(action.users, state);
    }

    case UsersActionTypes.ClearUserss: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();
