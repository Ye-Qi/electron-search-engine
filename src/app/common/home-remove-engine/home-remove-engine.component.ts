import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { ListEngineDialogComponent } from './list-engine-dialog/list-engine-dialog.component'
import { WebsitesService } from '../../service/websites/websites.service'

@Component({
  selector: 'app-home-remove-engine',
  templateUrl: './home-remove-engine.component.html',
  styleUrls: ['./home-remove-engine.component.scss']
})
export class HomeRemoveEngineComponent implements OnInit {
  websites = {}
  constructor(public dialog: MatDialog, public websitesService: WebsitesService) {}

  ngOnInit() {
    this.websitesService.websites$.subscribe((originWebsites) => {
      this.websites = originWebsites
    })
  }

  openDialog(): void {
    this.dialog.open(ListEngineDialogComponent, {
      width: '650px',
      data: this.websites
    })
  }

}
