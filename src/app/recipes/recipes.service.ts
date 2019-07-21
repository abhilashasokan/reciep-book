import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: '2',
      title: 'Spaghetti',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/image-tablet-1563310182.png',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: '3',
      title: 'Spaghetti1',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/image-tablet-1563310182.png',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];
  constructor() { }
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
