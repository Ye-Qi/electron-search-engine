import { Component, OnInit } from '@angular/core'
import { WebsitesService } from '../../service/websites/websites.service'

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  websites = {}
  selected = []
  constructor(public websitesService: WebsitesService) {}

  ngOnInit() {
    this.websitesService.websites$.subscribe((originWebsites) => {
      this.websites = originWebsites;
      Object.keys(originWebsites).forEach((websiteName) => {
        if (originWebsites[websiteName].checked) {
          this.selected.push(websiteName)
        }
      })
    })
  }
}
