import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit {
constructor(private router:Router){}
ngOnInit(): void {}
  onClicknavigate(){
this.router.navigate([''])
  }
}
