import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
const routes: Routes = [
  {
    path:'TD Form',
    component: TemplateFormComponent
  },
  {
    path: 'reactiveForm',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
