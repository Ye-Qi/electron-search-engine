import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  searchText = ''
  first = true
  engines = [
    'https://www.youtube.com/results?search_query=',
    'https://www.google.com/search?q=',
    'https://www.baidu.com/s?wd=',
    'https://www.sogou.com/web?query=',
    'https://www.xiaohongshu.com/search_result/'
  ]
  search(text: string) {
    if (this.searchText === text || !text) {
      return
    }
    this.first = false
    this.searchText = text
  }
  isNotFirst() {
    return !this.first
  }
}
