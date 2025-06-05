import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { Group } from '../../../../model/group.model';
import { CreateGroupDto } from '../dto/create-group.dto';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private readonly apiUrl = environment.apiUrl;
  private readonly grupos = signal<Group[]>([]);

  private readonly httpClient = inject(HttpClient);

  public buscarGrupos(): Observable<Group[]> {
    return this.httpClient
      .get<Group[]>(`${this.apiUrl}/grupo`)
      .pipe(tap((response) => this.grupos.set(response)));
  }

  public criarGrupo(grupo: CreateGroupDto): Observable<Group> {
    return this.httpClient
      .post<Group>(`${this.apiUrl}/grupo`, grupo)
      .pipe(
        tap((novoGrupo) =>
          this.grupos.update((gruposAntigos) => [...gruposAntigos, novoGrupo])
        )
      );
  }

  public getGruposSignal() {
    return this.grupos.asReadonly();
  }
}
