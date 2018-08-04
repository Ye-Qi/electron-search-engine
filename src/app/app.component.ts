import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  search = ''
  first = true
  engines = [
    'https://www.youtube.com/results?search_query=',
    'https://www.google.com/search?q=',
    'https://www.baidu.com/s?wd=',
    'https://www.sogou.com/web?query=',
    'https://www.xiaohongshu.com/search_result/'
  ]
  handleSearch() {
    if (!this.search) {
      return
    }
    this.first = false
  }
  isNotFirst() {
    return !this.first
  }
}
