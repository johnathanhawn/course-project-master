import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { recipe } from "../recipe.model";
import {recipesService} from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: recipe[];

  constructor(private recipesService:recipesService,
              private router:Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes()
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}
