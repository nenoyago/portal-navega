import { FormControl, Validators } from '@angular/forms';

import { findCPFEleventh, findCPFTenth } from '../cpf';

export class CustomValidator {
  static cpfOrEmailValidator = () => {
    const validator = (
      formControl: FormControl
    ): { [key: string]: unknown } | null => {
      if (!formControl.value) {
        return null;
      }

      if ((formControl.value as string).includes('@')) {
        return Validators.email(formControl);
      }

      return CustomValidator.cpfValidator(formControl);
    };
    return validator;
  };

  static cpfValidator = (
    formControl: FormControl
  ): { invalidCpf: boolean } | null => {
    const sanitizedCPF = (formControl.value as string).replace(/\D/g, '');

    if (sanitizedCPF.length !== 11) {
      return { invalidCpf: true };
    }

    const sanitizedCPFDigits: number[] = sanitizedCPF
      .split('')
      .map((x: string) => Number(x));

    const { 9: givenTenth, 10: givenEleventh } = sanitizedCPFDigits;
    const firstNine = sanitizedCPFDigits.splice(
      0,
      sanitizedCPFDigits.length - 2
    );

    const foundTenth = findCPFTenth(firstNine);
    if (givenTenth !== foundTenth) {
      return { invalidCpf: true };
    }
    const firstTen = [...firstNine, foundTenth];
    const foundEleventh = findCPFEleventh(firstTen);

    if (givenEleventh !== foundEleventh) {
      return { invalidCpf: true };
    }
    return null;
  };
}
