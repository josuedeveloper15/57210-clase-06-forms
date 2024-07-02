import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noHomeroValidator(control: AbstractControl) {
  if (control.value?.toLowerCase() === 'homero') {
    return {
      noHomero: true,
    };
  }
  return null;
}

export function existeApellido(control: AbstractControl) {
  const verificarApellido = new Promise<ValidationErrors | null>(
    (resolve, reject) => {
      setTimeout(() => {
        if (control.value?.toLowerCase() === 'simpson') {
          resolve({
            apellidoExiste: true,
          });
        } else {
          resolve(null);
        }
      }, 2000);
    }
  );
  return verificarApellido;
}
