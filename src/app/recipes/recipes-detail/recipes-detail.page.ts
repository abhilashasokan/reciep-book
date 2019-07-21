import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {
  currentRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.currentRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDelete() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to remove this recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.currentRecipe.id);
            this.router.navigate(['/recipes']);
          }
        },
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
