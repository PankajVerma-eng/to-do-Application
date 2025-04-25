import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DescriptionPipe } from '../../Components/pipe/description.pipe';
import { InfoService } from '../../appServices/services/info.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, DescriptionPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  item = {
    status: 'Pending'
  }
  submittedData: any[] = [];
  taskname: string = '';
  description: string = '';
  estimatedTime: Date = new Date();
  status: string = ''
  
  
  constructor(private router: Router, private dataService: InfoService) { }
  
  ngOnInit(): void {
    this.getFormData();

    // this.dataService.formData$.subscribe((data: any) => {
    //   console.log("Home component received:", data);
    //   this.submittedData = data;
    // });
  }
  

  @ViewChild('deleteModal') deleteModalRef!: ElementRef;
  private deleteModal!: Modal;

  openModal() {
    this.deleteModal = new Modal(this.deleteModalRef.nativeElement);
    this.deleteModal.show();
  }

  closeModal() {
    if (this.deleteModal) {
      this.deleteModal.hide();
    }
  }

  getFormData() {
    this.dataService.formData$.subscribe((data) => {
      this.submittedData = data;
      console.log("submitted form data of homeComponents  ", this.submittedData)

      // here stroring the data in the localStorage
      localStorage.setItem('submittedFormData of homeComponents', JSON.stringify(this.submittedData));

      // and to get the data from the local storage is to parse the data from the string to object
      const dataStored = localStorage.getItem('submittedFormData')
      const dataObj = dataStored ? JSON.parse(dataStored) :'data loading...';
      console.log("Data retrived from the localStorage is ", dataObj)
    });
  }

  deleteItem(index: number): void {
    this.submittedData.splice(index, 1);
    this.closeModal();
  }

  addnewnotes() {
    this.router.navigate(['/addtask'])
  }

  viewdescription() {
    this.router.navigate(['/viewdetail'])
  }

  statusChange(item: any) {
    if (item.status === 'Pending') {
      item.status = 'Progress'
    }

    else if (item.status === 'Progress') {
      item.status = 'Complete'
    }
    else {
      item.status = 'Complete'
    }
    // item.status = !item.status ==='Process' ? item.status ==='Pending' ? 'Process': 'Complete';
  }

  addMultipleNotes(){
    this.router.navigate(['/multipleTask'])
  }

}



