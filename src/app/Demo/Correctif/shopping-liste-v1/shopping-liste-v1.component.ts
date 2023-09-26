import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-liste-v1',
  templateUrl: './shopping-liste-v1.component.html',
  styleUrls: ['./shopping-liste-v1.component.scss']
})
export class ShoppingListeV1Component {
  newArticle!: string
  articleList : string[] = ["coca","fanta","ice-tea"]
  shoppingList: string[] = []
  listeCassee : string = ""

  ajouter() {
    this.shoppingList.push(this.newArticle)
    this.newArticle = ""
  }
  ajout(index: number) {
    this.shoppingList.push(this.articleList[index])
  }
  desassembler(){
    this.listeCassee  = this.articleList.join(" - ")
  }
  ajouterArticle(){}

}
