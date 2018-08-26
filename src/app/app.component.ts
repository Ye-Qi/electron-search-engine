import { Component, OnInit } from '@angular/core'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'
import SearchService from './service/search/search.service'
import WebsitesService, { websites } from './service/websites/websites.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  search = ''
  isFirstSearch = true
  websites = websites
  Object = Object
  sidebarState = ''
  show = false
  constructor (public searchService: SearchService, public websitesService: WebsitesService) {
    websitesService.show$.subscribe((show) => {
      this.show = show;
      if (this.show) {
        this.sidebarState = 'inactive'
      } else {
        this.sidebarState = 'active'
      }
    })
  }

  ngOnInit () {
    this.handleSearch()
  }

  handleSearch () {
    this.searchService.search$.subscribe((search) => {
      if (this.isFirstSearch && search) {
        this.search = search
        this.isFirstSearch = false
      } else if (!this.isFirstSearch) {
        this.search = search
      }
    })
  }
}
