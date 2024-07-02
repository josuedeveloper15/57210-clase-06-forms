import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  existeApellido,
  noHomeroValidator,
} from '../../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: this.formBuilder.control(null, {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$'),
          noHomeroValidator,
        ],
        asyncValidators: [existeApellido],
      }),
      // firstName: [
      //   '',
      //   {
      //     validators: [
      //       Validators.required,
      //       Validators.minLength(3),
      //       Validators.pattern('^[a-zA-Z]+$'),
      //       noHomeroValidator,
      //     ],
      //     asyncValidators: [existeApellido],
      //   },
      // ],
      lastName: ['', Validators.required],
    });
  }

  get firstNameControl() {
    return this.registerForm.get('firstName');
  }
  get lastNameControl() {
    return this.registerForm.get('lastName');
  }

  get firstNameControlInvalid() {
    return this.firstNameControl?.invalid;
  }

  get lastNameControlInvalid() {
    return this.lastNameControl?.invalid;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      alert('El formulario es invalido');
    } else {
      alert('Enviado!');
      console.log(this.registerForm.value);
    }
  }
}
