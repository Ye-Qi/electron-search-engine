import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { SearchService } from '../../service/search/search.service'
import { WebsitesService } from '../../service/websites/websites.service'

const ICONS = {
  'ic-search': 'node_modules/material-design-icons/action/svg/production/ic_search_48px.svg',
  'ic-close': 'node_modules/material-design-icons/content/svg/production/ic_clear_48px.svg',
  'ic-menu': 'node_modules/material-design-icons/navigation/svg/production/ic_menu_48px.svg'
}

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  public focusing = false
  public text = ''
  public showSidebar = false
  public toggleSidebar

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public searchService: SearchService,
    public websitesService: WebsitesService
  ) {
    const iconNames = Object.keys(ICONS);
    iconNames.forEach((name) => {
      iconRegistry.addSvgIcon(
        name,
        sanitizer.bypassSecurityTrustResourceUrl(ICONS[name])
      )
    })
    websitesService.show$.subscribe((show) => {
      this.showSidebar = show
    })
  }

  ngOnInit() {
  }

  handleFocus () {
    this.focusing = true
  }
  handleBlur () {
    setTimeout(() => {
      this.focusing = false
    }, 500)
  }
  handleKeyUp (e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this.searchService.search(this.text)
    }
  }
  handleClick (e: MouseEvent) {
    this.text = ''
    this.searchService.search(this.text)
  }
}
