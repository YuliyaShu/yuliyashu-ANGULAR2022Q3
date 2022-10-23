import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors,
} from '@angular/forms';

export function noFutureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => (
    Date.parse(control.value) > Date.now() ? { noFutureDateValidator: control.value } : null
  );
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})

export class AdminComponent {
  authForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [
      Validators.maxLength(255),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}$/),
    ]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}$/),
    ]),
    date: new FormControl('', [
      Validators.required,
      noFutureDateValidator(),
    ]),
  });
  controlTitle = this.authForm.get('title') as FormControl;
  controlDescription = this.authForm.get('description') as FormControl;
  controlImage = this.authForm.get('image') as FormControl;
  controlVideo = this.authForm.get('video') as FormControl;
  controlDate = this.authForm.get('date') as FormControl;
}
