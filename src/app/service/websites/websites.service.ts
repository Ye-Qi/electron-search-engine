import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

export const websites = {
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
  behance: {
    url: 'https://www.behance.net/search?content=projects&sort=appreciations&time=week&featured_on_behance=true&search=',
    icon: '',
    name: 'behance'
  },
  dribbble: {
    url: 'https://dribbble.com/search?q=',
    icon: '',
    name: '人人都是产品经理'
  },
  jianshu: {
    url: 'https://www.jianshu.com/search?q=',
    icon: '',
    name: '简书'
  },
  juejin: {
    url: 'https://juejin.im/search?query=',
    icon: '',
    name: '掘金'
  },
  kr: {
    url: 'https://36kr.com/search/articles/',
    icon: '',
    name: '36氪'
  },
  zhihu: {
    url: 'https://www.zhihu.com/search?type=content&q=',
    icon: '',
    name: '知乎'
  }
}

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  selectedWebsites: string[] = Object.keys(websites);
  private showSource = new Subject<boolean>()
  show$ = this.showSource.asObservable()
  constructor() { }

  toggleShow (show: boolean) {
    this.showSource.next(show)
  }

  toggleWebsite(website: string) {
    if (!this.selectedWebsites.includes(website)) {
      this.selectedWebsites.push(website);
    } else {
      this.selectedWebsites = this.selectedWebsites.filter((web) => (web !== website))
    }
  }

  includeWebsites(key: string) {
    return this.selectedWebsites.includes(key);
  }
}
