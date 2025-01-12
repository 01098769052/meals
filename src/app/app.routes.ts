import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MealsComponent } from './meals/meals.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { PastaComponent } from './pasta/pasta.component';
import { BreakfastComponent } from './breakfast/breakfast.component';

export const routes: Routes = [
    {path:'' , redirectTo :'home' , pathMatch:'full'},
    {path:"home" , component:HomeComponent , title :"Home"},
    {path:"about" , component:AboutComponent , title :"About"},
    {path:"meals" , component:MealsComponent , title :"Meals" , children:[

        {path:'' , redirectTo:'Seafood' , pathMatch:'full'},
        {path:'Seafood' , component:SeafoodComponent , title:"Seafood"},
        {path:'Pasta' , component:PastaComponent , title:"Pasta"},
        {path:'Breakfast' , component:BreakfastComponent , title:"Breakfast"},
    ]},
    {path:"team" , component:TeamComponent , title :"Team"},
    {path:"contacts" , component:ContactComponent , title :"Contact"},
    {path:"**" , component:NotfoundComponent , title :"OooopS"}
];
