import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatInputModule, MatButtonModule, MatIconModule, MatDialogModule, FormsModule, ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = "";

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
