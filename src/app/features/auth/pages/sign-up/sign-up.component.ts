import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  private readonly authService = inject(AuthService);

  private readonly router = inject(Router);

  usuarioForm = new FormGroup({
    nome: new FormControl(),
    sobrenome: new FormControl(),
    email: new FormControl(),
    senha: new FormControl(),
    documento: new FormControl(),
    telefone: new FormControl(),
  });

  public criarConta() {
    this.authService
      .cadastrarUsuario({
        nome: this.usuarioForm.value.nome,
        sobrenome: this.usuarioForm.value.sobrenome,
        documento: this.usuarioForm.value.documento,
        email: this.usuarioForm.value.email,
        senha: this.usuarioForm.value.senha,
        telefone: this.usuarioForm.value.telefone,
        perfilId: '00646d42-dcb7-46da-9c42-f4fabede1193',
      })
      .subscribe(() => {
        this.router.navigate(['/auth/sign-in']);
      });
  }
}
