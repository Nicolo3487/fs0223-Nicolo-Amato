import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})

export class TemplateFormComponent {
  @ViewChild('f',{static:true}) form !:NgForm;

  submit(form:NgForm) {
    console.log(form);
    console.log(form.form.value);
    this.form.reset();
  }

  ngONInit() {
    this.form.statusChanges?.subscribe(status => {
      console.log(status);
    });
  } 
}
