import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import pkg from '../../../../../package.json';
import { RequestStatus } from '../../../shared/enums/request-status';
import { CustomValidator } from '../../../shared/utils/form/form-validators';
import { validateFormFields } from '../../../shared/utils/form/validate-form-fields';
import { SessionService } from '../../services/session.service';

const SIGN_IN_TIMEOUT = 700;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent {
  readonly version = pkg.version;

  private router = inject(Router);
  private session = inject(SessionService);

  public status = signal<RequestStatus>(RequestStatus.idle);

  readonly form = new FormGroup({
    username: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        CustomValidator.cpfOrEmailValidator()
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(6)])
    )
  });

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get passwordError(): string {
    if (this.password.hasError('required')) {
      return 'Senha é obrigatória.';
    }
    if (this.password.hasError('minlength')) {
      return 'Senha precisa ter no mínimo 6 caracteres.';
    }
    return '';
  }

  get usernameError(): string {
    if (this.username.hasError('required')) {
      return 'CPF ou e-mail é obrigatório.';
    }
    if (this.username.hasError('email')) {
      return 'Digite um e-mail válido.';
    }
    if (this.username.hasError('invalidCpf')) {
      return 'CPF inválido.';
    }
    return '';
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submit();
    } else {
      validateFormFields(this.form);
    }
  }

  private async submit() {
    this.status.set(RequestStatus.loading);

    await new Promise((resolve) => setTimeout(resolve, SIGN_IN_TIMEOUT));

    this.session.saveSession({
      username: this.username.value
    });

    this.status.set(RequestStatus.loaded);

    this.router.navigate(['dashboard']).then(() => {
      this.status.set(RequestStatus.loaded);
    });
  }
}
