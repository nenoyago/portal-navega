export class FormErrors {
  static getMessage(
    fieldName: string,
    validatorName: string,
    validatorValue?: Record<string, string>
  ): string {
    const config: { [key: string]: string } = {
      required: `${fieldName} é obrigatório.`,
      minlength: `${fieldName} precisa ter no mínimo ${validatorValue?.['requiredLength']} caracteres.`,
      maxlength: `${fieldName} precisa ter no máximo ${validatorValue?.['requiredLength']} caracteres.`,
      email: `Digite um ${fieldName.toLowerCase()} válido.`,
      invalidCharSpecial: `${fieldName} deve conter caracteres especiais.`,
      invalidCharLower: `${fieldName} deve conter letras minúsculas.`,
      invalidCharUpper: `${fieldName} deve conter letras maiúsculas.`,
      invalidCharNumber: `${fieldName} deve conter números.`,
      notEquals: `${fieldName} não confere.`,
      invalidDate: `${fieldName} inválida.`,
      invalidDocument: `${fieldName} inválido.`,
      atLeastOneValue: `Preencha com pelo menos um ${fieldName.toLowerCase()}.`,
      max: `${fieldName} deve ser menor ou igual a ${validatorValue?.['max']}.`,
      min: `${fieldName} deve ser maior ou igual a ${validatorValue?.['min']}.`
    };

    return config[validatorName];
  }
}
