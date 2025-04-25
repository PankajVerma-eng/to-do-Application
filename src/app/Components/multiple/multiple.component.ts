import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../../appServices/services/info.service';

@Component({
  selector: 'app-multiple',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './multiple.component.html',
  styleUrl: './multiple.component.scss'
})
export class MultipleComponent implements OnInit {

  form!: FormGroup

  constructor(private router: Router, private dataService: InfoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      forms: this.fb.array([]) // here empty array  and the item added dynamically
    });
    // for the default note form
    this.addForm();
  }

  get forms(): FormArray {
    return this.form.get('forms') as FormArray;
  }

  anotherCreateForm(): FormGroup {
    return this.fb.group({
      taskname: ['', Validators.required],
      description: ['', [Validators.required, Validators.min(2)]],
      estimatedTime: ['', Validators.required],
      status: ['Pending', Validators.required]
    });
  }

  addForm(): void {
    console.log("form Added of  multiplecomponents")
    this.forms.push(this.anotherCreateForm());
  }

  removeForm(index: number) {
    this.forms.removeAt(index);
    console.log("forms deleted of multiplecomponents")
  }

  onSubmit() {
    if (this.form.valid) {
      const tasks = this.form.value.forms; // <-- unwrap the FormArray
      this.dataService.sumData(tasks); // pass only the array of form items
      console.log("form submitted of multiplecomponents", tasks);

      this.router.navigate(['/home'])
    } else {
      console.log("form is invalid of multiplecomponents");
    }

  }

}
