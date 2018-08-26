import { Component, OnInit } from '@angular/core'
import WebsitesService, { websites } from '../../service/websites/websites.service'

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {
  websites = websites
  Object = Object
  constructor(public websitesService: WebsitesService) {}

  ngOnInit() {
  }

}
