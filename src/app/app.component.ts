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
      state('in', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          transform: 'translateX(-100%)',
          opacity: 0
        }),
        animate(250)
      ]),
      transition('* => void', [
        animate(250, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ])
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
  rowHeight = '667px'
  constructor (public searchService: SearchService, public websitesService: WebsitesService) {
    websitesService.show$.subscribe((show) => {
      this.show = show;
      if (this.show) {
        this.rowHeight = '800px'
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
