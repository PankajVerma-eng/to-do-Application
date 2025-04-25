import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../../appServices/services/info.service';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.scss',
})

export class AddtaskComponent {
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private dataService: InfoService) {
    this.todoForm = this.fb.group({
      taskname: ['', Validators.required],
      description: ['', Validators.required],
      estimatedTime: ['', Validators.required],
      status: ['Pending', Validators.required]
    });

  }
  onSubmit() {
    if (this.todoForm.valid) {
      this.dataService.addData(this.todoForm.value);
      console.log("form submitted of addTaskComponents ", this.todoForm.value)
      this.router.navigate(['/home'])

    } else {
      console.warn('Form is invalid  of addTaskComponents:', this.todoForm.value);
    }
  }
}