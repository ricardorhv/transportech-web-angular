import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Group } from '../../../../model/group.mode';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly apiUrl = environment.apiUrl;

  private readonly httpClient = inject(HttpClient);

  public buscarGrupos(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.apiUrl}/grupo`);
  }
}
