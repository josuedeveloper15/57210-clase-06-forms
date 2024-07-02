import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss',
})
export class ReactiveFormsComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]+$'),
        ],
      ],
      lastName: ['', Validators.required],
    });
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
