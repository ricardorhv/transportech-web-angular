import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  private readonly authService = inject(AuthService);

  private readonly router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(),
    senha: new FormControl(),
  });

  public login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.authService.loginUsuario(email, senha).subscribe(() => {
      this.router.navigate(['/app/groups']);
    });
  }
}
