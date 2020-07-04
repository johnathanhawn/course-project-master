import { Injectable} from '@angular/core';
import { Subject } from "rxjs";
import {ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class shoppingListService {
  ingredientsChanged = new Subject<ingredient[]>();

  private ingredients: ingredient[]= [
    new ingredient('test Ingredient',100),
    new ingredient('tomatoes',10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }
  addIngredients(ingredients: ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }
}
