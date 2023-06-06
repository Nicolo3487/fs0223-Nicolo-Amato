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

    ngOnInit():void {
      this.form = this.fb.group({
          name: [],
          nickname: [],
          powers: this.fb.array([]),
          enemy: [],
          planet: [],
          weakness: this.fb.control([])
      })

      this.form.statusChanges.subscribe(status => console.log(status));
      this.form.valueChanges.subscribe(value => console.log(value));
    }
    addPower(){
      let control = new FormControl(null);
      (this.form.get('powers') as FormArray).push(control);
    }
    getPowers(){
      return (this.form.get('powers') as FormArray).controls;
    }
    submit(){
      console.log(this.form.value);
    }
    
  }
