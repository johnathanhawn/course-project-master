import {Component, OnDestroy, OnInit} from '@angular/core';
import {ingredient} from "../shared/ingredient.model";
import {shoppingListService}from "./shopping-list.service"
import {Subscription} from "rxjs";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: ingredient[];
  private ingredientChangedSub: Subscription

  constructor(private shoppingListService:shoppingListService) {
  this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.ingredientChangedSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients:ingredient[]) => this.ingredients = ingredients)
  }

  ngOnDestroy() {
    this.ingredientChangedSub.unsubscribe()
  }
}
