import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-viewdetails',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './viewdetails.component.html',
  styleUrl: './viewdetails.component.scss'
})
export class ViewdetailsComponent {
  // formContainer!: FormArray;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    // this.formContainer = this.fb.array([]);
    // this.addForm();
  }

  // get forms(): FormArray {
  //   return this.formContainer;
  // }

  // createForm(): FormGroup {
  //   return this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  // addForm(): void {
  //   this.forms.push(this.createForm());
  // }

  // submitForms(): void {
  //   console.log(this.forms.value);
  // }

}
