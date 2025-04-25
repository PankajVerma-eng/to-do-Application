import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { MultipleComponent } from './Components/multiple/multiple.component';

export const routes: Routes = [
    {path:"" , component:HomeComponent},
    {path : 'home' , component:HomeComponent},
    {path:'addtask' , loadComponent:()=>import('./Components/addtask/addtask.component').then(m=>m.AddtaskComponent)},
    {path:'multipleTask' ,component:MultipleComponent},
    {path:'viewdetail' , loadComponent:() =>import('./Components/viewdetails/viewdetails.component').then(m=>m.ViewdetailsComponent)},
    {path:'**', component:NotfoundComponent}
];
