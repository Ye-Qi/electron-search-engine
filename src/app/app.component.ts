import { Component, OnInit } from '@angular/core'
import SearchService from './service/search.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent implements OnInit {
  search = ''
  isFirstSearch = true
  engines = [
    'https://www.youtube.com/results?search_query=',
    'https://www.google.com/search?q=',
    'https://www.baidu.com/s?wd=',
    'https://www.sogou.com/web?query=',
    'https://www.xiaohongshu.com/search_result/'
  ]
  constructor (public searchService: SearchService) {}

  ngOnInit () {
    this.handleSearch()
  }

  handleSearch () {
    this.searchService.search$.subscribe((search) => {
      console.log('search', search)
      if (this.isFirstSearch && search) {
        this.search = search
        this.isFirstSearch = false
      } else if (!this.isFirstSearch) {
        this.search = search
      }
    })
  }
}
