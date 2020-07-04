import { Injectable } from '@angular/core';
import {recipe} from "./recipe.model";
import {ingredient} from "../shared/ingredient.model";
import {shoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class recipesService {

  private recipes: recipe[] = [
    new recipe('A test recipe',
                'a test desc',
                'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
                [
                  new ingredient('meat',1),
                  new ingredient('broth',1),
                  new ingredient('cilantro',4)
                ]),
    new recipe( 'A testy treat',
                'another description',
                'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg',
                [
                  new ingredient('potatoes',5),
                  new ingredient('cheese',1),
                  new ingredient('chicken',2)
                ])
  ];


  constructor(private shoppingListService:shoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id){
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients:ingredient[]){
    this.shoppingListService.addIngredients(ingredients)
  }
}
