import { Component, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-add-engine-dialog',
  templateUrl: './add-engine-dialog.component.html',
  styleUrls: ['./add-engine-dialog.component.css']
})
export class AddEngineDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEngineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
