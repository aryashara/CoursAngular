import { Component } from '@angular/core';

@Component({
  selector: 'app-exos2',
  templateUrl: './exos2.component.html',
})
export class Exos2Component {

  panierCourses: string[] = [];
  nouvelArticle: string = '';
  articles = [
    {
      id: 1, name: "DeathNote", isSelected: false
    },
    {
      id: 2, name: "FruitDuDémon", isSelected: false
    },
    {
      id: 3, name: "Une journée en enfert", isSelected: false
    }
  ];

  articlesSelectionnes: string[] = [];

  ajouterArticle() {
    if (this.nouvelArticle.trim() !== '') {
      this.panierCourses.push(this.nouvelArticle);
      this.nouvelArticle = '';
     
    }
  }
  ajouterArticlesSelectionnes() {
    for (const article of this.articles) {
      if (article.isSelected) {
        this.panierCourses.push(article.name);
      }
    }
  }

}
