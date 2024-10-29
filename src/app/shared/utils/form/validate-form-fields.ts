import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';

export function validateFormFields(
  form: UntypedFormGroup | UntypedFormArray
): void {
  if (!form) {
    throw new Error('Form is not defined');
  }

  if (form.valid) {
    return;
  }

  Object.keys(form.controls).forEach((field) => {
    const control = form.get(field);
    if (control) {
      control.markAsDirty();
      control.markAsTouched();
      if (
        control instanceof UntypedFormGroup ||
        control instanceof UntypedFormArray
      ) {
        validateFormFields(control);
      }
    }
  });
}
