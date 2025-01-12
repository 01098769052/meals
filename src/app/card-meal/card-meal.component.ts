import { Component, Input } from '@angular/core';
import { Meal } from '../model/meal';

@Component({
  selector: 'app-card-meal',
  imports: [],
  templateUrl: './card-meal.component.html',
  styleUrl: './card-meal.component.css'
})
export class CardMealComponent {
  
  @Input({required:true}) oneMeal:Meal = {} as Meal

}
