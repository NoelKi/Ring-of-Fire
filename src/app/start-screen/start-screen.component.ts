import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router
import { CommonModule } from '@angular/common'; // Importa CommonModule si necesitas directivas básicas

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  constructor(private router: Router) {

  }

  newGame() {
    this.router.navigateByUrl('/game');
  }
}
