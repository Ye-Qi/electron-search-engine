import { Component, OnInit } from '@angular/core'
import { WebsitesService } from '../../service/websites/websites.service'

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  websites = {}
  webs = []
  Object = Object
  constructor(public websitesService: WebsitesService) {
    websitesService.websites$.subscribe((webs) => {
      this.websites = webs
    })
  }

  ngOnInit() {
  }

}
