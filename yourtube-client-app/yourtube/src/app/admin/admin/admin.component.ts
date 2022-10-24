import { Component } from '@angular/core';
import {
  FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors,
} from '@angular/forms';
import { config } from './admin.constants';

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
      Validators.minLength(config.MIN_LENGTH),
      Validators.maxLength(config.MAX_LENGTH),
    ]),
    description: new FormControl('', [
      Validators.maxLength(config.MAX_LENGTH_DESCRIPTION),
    ]),
    image: new FormControl('', [
      Validators.required,
      Validators.pattern(config.PATTERN_IS_URL),
    ]),
    video: new FormControl('', [
      Validators.required,
      Validators.pattern(config.PATTERN_IS_URL),
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
