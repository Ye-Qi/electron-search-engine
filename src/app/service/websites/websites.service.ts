import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

const websites = {
  youtube: {
    url: 'https://www.youtube.com/results?search_query=',
    icon: ''
  },
  google: {
    url: 'https://www.google.com/search?q=',
    icon: ''
  },
  baidu: {
    url: 'https://www.baidu.com/s?wd=',
    icon: '',
    name: '百度'
  },
  sogou: {
    url: 'https://www.sogou.com/web?query=',
    icon: '',
    name: '搜狗'
  },
  xiaohongshu: {
    url: 'https://www.xiaohongshu.com/search_result/',
    icon: '',
    name: '小红书'
  }
}

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  private showSource = new Subject<boolean>()
  show$ = this.showSource.asObservable()
  constructor() { }

  toggleShow (show: boolean) {
    this.showSource.next(show)
  }
}
