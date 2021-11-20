import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dpi',
  templateUrl: './dpi.component.html',
  styleUrls: ['./dpi.component.css']
})
export class DPIComponent implements OnInit {

     data = [
      {
        id : 1 ,
        name : "Pizza",
        description : "The pizza is a traditional cooking recipe of Italian cuisine, originating in Naples based on a pancake of bread dough, ...",
        imageUrl : "https://img.cuisineaz.com/660x660/2021/02/25/i159373-pizza-margherita.jpeg"

      },
      {
        id : 2 ,
        name : "Ojja Merguez",
        description : "A delicious Tunisian dish with merguez and eggs, very tasty, rich and complete. A very easy and very quick recipe to make, ",
        imageUrl : "https://www.recettesmania.com/images/recipe/cuisiner-sans-gluten-1/2020/08/cuisiner-sans-gluten-1-chakchouka-merguez-oeufs-sans-gluten.jpg"
      },
      {
        id : 3 ,
        name : "chocolate cake",
        description : " A chocolate cake is a pastry made from chocolate. There are many recipes around the world. Very Delicous XD .",
        imageUrl : "https://cdn.pratico-pratiques.com/app/uploads/sites/2/2020/11/10143108/gateau-au-chocolat-et-aux-biscuits.jpg"
      }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
