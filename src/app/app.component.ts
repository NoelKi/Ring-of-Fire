import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerComponent } from "./player/player.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ringOfFire';
}
