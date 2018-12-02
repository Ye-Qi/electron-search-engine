import { Component, Inject } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { WebsitesService } from '../../../service/websites/websites.service'

@Component({
  selector: 'app-add-engine-dialog',
  templateUrl: './add-engine-dialog.component.html',
  styleUrls: ['./add-engine-dialog.component.scss']
})
export class AddEngineDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEngineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    public websitesService: WebsitesService
  ) {}

  form = new FormGroup({
    'name': new FormControl('', [
      Validators.required
    ]),
    'icon': new FormControl(),
    'url': new FormControl('', [
      Validators.required,
      Validators.pattern(/((http|ftp|https):\/\/)/)
    ])
  })

  get name() {
    return this.form.get('name')
  }

  get icon() {
    return this.form.get('icon')
  }

  get url() {
    return this.form.get('url')
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  async onSubmit() {
    if (!!this.form.errors) {
      return
    }
    await this.websitesService.addWebsite(
      this.name.value,
      this.url.value,
      this.icon.value
    )
    this.dialogRef.close()
  }
}
