import { Component, OnInit} from '@angular/core';
import {recipe} from "../recipe.model";

import {recipesService} from "../recipes.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe:recipe;
  id: number;
  constructor(private recipesService:recipesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
     this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.id);
     })
  }

  toShoppingList(){
      this.recipesService.addIngredientToShoppingList(this.selectedRecipe.ingredients)
    }

  onEditRecipe(){
      this.router.navigate(['edit'],{relativeTo: this.route})
      // this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route})
  }

  }

