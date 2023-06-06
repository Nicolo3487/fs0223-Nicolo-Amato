import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  
    power:string[]  = ['acuqa', 'fuoco', 'terra', 'aria'];
    form!: FormGroup;

  constructor (private fb: FormBuilder){}

    ngOnInit() {
      this.form = this.fb.group({})
}
