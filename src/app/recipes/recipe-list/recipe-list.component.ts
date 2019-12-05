import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'Test desc 1', 'https://p1.pxfuel.com/preview/949/796/952/food-recipe-delicious-breakfast-lunch-dinner.jpg'),
    new Recipe('A Test Recipe 2', 'Test desc 2', 'https://p1.pxfuel.com/preview/949/796/952/food-recipe-delicious-breakfast-lunch-dinner.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onClickedRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
