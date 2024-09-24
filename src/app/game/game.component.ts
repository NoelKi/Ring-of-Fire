import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from './../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from "../game-info/game-info.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, GameInfoComponent, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  game!: Game;
  currCard: string = "";
  currCardCheck: string | undefined = "";

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.newGame();
  }

  takeCard(){
    if(!this.pickCardAnimation) {

      this.currCardCheck = this.game.stack.pop()
      if (typeof this.currCardCheck === 'string')
      {
        this.currCard = this.currCardCheck;
      }
      this.pickCardAnimation = true;

      this.game.currPlayer++;
      this.game.currPlayer = this.game.currPlayer % this.game.players.length;

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((playerName: string) => {
      if (playerName && playerName != "") {
        this.game.players.push(playerName);
      }
    });
  }
}
