import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from './../../models/game';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  game!: Game;
  currCard: string | undefined = "";

  ngOnInit(): void {
    this.newGame();
  }

  takeCard(){
    if(!this.pickCardAnimation) {

      this.currCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      
      setTimeout(() => {
        this.pickCardAnimation = false;
        if (this.currCard) {
          this.game.playedCards.push(this.currCard);
        }  
      }, 1250)
    }
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);    
  }
}
