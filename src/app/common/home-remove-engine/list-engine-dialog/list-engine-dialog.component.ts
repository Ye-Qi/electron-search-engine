import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { WebsitesService } from '../../../service/websites/websites.service'

@Component({
  selector: 'app-list-engine-dialog',
  templateUrl: './list-engine-dialog.component.html',
  styleUrls: ['./list-engine-dialog.component.scss']
})
export class ListEngineDialogComponent implements OnInit {
  websites = {}
  selected: string[] = []

  constructor(
    public dialogRef: MatDialogRef<ListEngineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    public websitesService: WebsitesService
  ) {}

  ngOnInit() {}

  handleCancelClick() {
    this.dialogRef.close()
  }

  handleItemClick(key: string) {
    if (this.selected.includes(key)) {
      this.selected.filter((s) => (s !== key))
    } else {
      this.selected.push(key);
    }
  }

  async handleComfirmClick() {
    await this.websitesService.delWebsite(this.selected)
    this.dialogRef.close()
  }
}
