import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game.model';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  game: Game;

  takeCard(){
    this.pickCardAnimation = true;
  }

  newGame() {
    this.game = new Game();
  }
}
