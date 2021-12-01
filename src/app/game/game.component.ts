import { Component, OnInit } from '@angular/core';
import {CardComponent} from '../card/card.component'
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  cards:any;
  start:boolean=false;
  displaySorted:boolean=false;
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getCards().subscribe(data=>{
      this.cards=data;
    })
  }

  reloadCurrentPage() {
    window.location.reload();
   }
   play(){
     this.start=true;
   }
   displaySortedHand(){
     this.displaySorted=true;
   }

}
