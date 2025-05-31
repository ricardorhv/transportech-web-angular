import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Usuario } from '../../../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  private readonly httpClient = inject(HttpClient);

  public cadastrarUsuario(
    novoUsuario: Omit<Usuario, 'id'>
  ): Observable<Usuario> {
    return this.httpClient.post<Usuario>(
      `${this.apiUrl}/usuario/criar-conta`,
      novoUsuario
    );
  }
}
