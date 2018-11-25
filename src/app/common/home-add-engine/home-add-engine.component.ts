import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { AddEngineDialogComponent } from './add-engine-dialog/add-engine-dialog.component'

@Component({
  selector: 'app-home-add-engine',
  templateUrl: './home-add-engine.component.html',
  styleUrls: ['./home-add-engine.component.scss']
})
export class HomeAddEngineComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(AddEngineDialogComponent, {
      width: '250px'
    })
  }

}
