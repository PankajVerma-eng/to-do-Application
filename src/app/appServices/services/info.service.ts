import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() {}
  private formDataSubject = new BehaviorSubject<any[]>([]);
  formData$ = this.formDataSubject.asObservable();

  private data: any[] = [];

  addData(formData: any) {
    this.data.push(formData);
    this.formDataSubject.next(this.data);
  }

  sumData(formData: any[]) {
    this.data.push(...formData);
    this.formDataSubject.next(this.data);
  }
}
