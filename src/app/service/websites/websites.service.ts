import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import storage from '../../utils/storage'
import { websites as defaultWebsites } from '../../config/websites'

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  selectedWebsites: string[] = [];
  private websitesSource = new Subject<object>()
  private showSource = new Subject<boolean>()
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

    const webs = Object.keys(websites)
    const webDetails = webs.find((web) => (web === website)) as any;
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
    const websites = await storage.get('websites') as any
    const delWebsite = websites.filter((web) => !names.includes(web))
    await storage.set('websites', delWebsite)
    this.websitesSource.next(delWebsite)
  }


  toggleShow (show: boolean) {
    this.showSource.next(show)
  }

  includeWebsites(key: string) {
    return this.selectedWebsites.includes(key);
  }
}
