import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import storage from '../../utils/storage'
import { websites as defaultWebsites } from '../../config/websites'

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  selectedWebsites: string[] = [];
  private websitesSource = new BehaviorSubject<object>({})
  private showSource = new BehaviorSubject<boolean>(false)
  show$ = this.showSource.asObservable()
  websites$ = this.websitesSource.asObservable()
  constructor() {
    this.init();
    this.websites$.subscribe(webs => {
      this.selectedWebsites = Object.keys(webs).filter((web) => webs[web].checked).sort((a, b) => (webs[a].createTime - webs[b].createTime))
    })
  }

  async init () {
    const websites = await storage.get('websites')
    if (!websites || Object.keys(websites).length === 0) {
      await storage.set('websites', defaultWebsites)
      this.websitesSource.next(defaultWebsites)
    } else {
      this.websitesSource.next(websites)
    }
  }

  async toggleWebsite(website: string) {
    const websites = await storage.get('websites')

    const webDetails = websites[website];
    if (webDetails) {
      webDetails.checked = !webDetails.checked
      webDetails.updateTime = Date.now()
      await storage.set('websites', websites)
    }
    this.websitesSource.next(websites)
  }

  async addWebsite(name: string, url: string, icon?: string) {
    const websites = await storage.get('websites') as any
    websites[name] = {
      name,
      url,
      icon,
      checked: true,
      createTime: Date.now(),
      updateTime: Date.now()
    }
    await storage.set('websites', websites)
    this.websitesSource.next(websites)
  }

  async delWebsite(names: string[]) {
    if (names.length === 0) {
      return
    }
    const websites = await storage.get('websites') as any
    names.forEach(name => {
      if (websites[name]) {
        delete websites[name];
      }
    })
    await storage.set('websites', websites)
    this.websitesSource.next(websites)
  }


  toggleShow (show: boolean) {
    this.showSource.next(show)
  }

  async includeWebsites(key: string) {
    const websites = await storage.get('websites')
    return websites[key] && websites[key].checked
  }
}
