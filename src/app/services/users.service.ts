import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Users } from '../store/models/users.model';
import { NgxDhis2HttpClientService } from '@hisptz/ngx-dhis2-http-client';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: NgxDhis2HttpClientService) {}

  /**
   * Load users with their information
   */
  loadUsers(): Observable<Users> {
    return forkJoin(
      this.httpClient.get(
        'users.json?fields=id,name,displayName,created,lastUpdated, userCredentials[*]' +
          'email,dataViewOrganisationUnits[id,name,level],organisationUnits' +
          '[id,name,level],userCredentials[username]'
      )
    ).pipe(
      map((userResults: any[]) => {
        console.log(userResults);
        return { ...userResults[0] };
      })
    );
  }
}
