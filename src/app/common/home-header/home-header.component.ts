import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import { SearchService } from '../../service/search/search.service'
import { WebsitesService } from '../../service/websites/websites.service'

const ICONS = {
  'ic-search': '../../../assets/svg/material-icons/search.svg',
  'ic-close': '../../../assets/svg/material-icons/clear.svg',
  'ic-menu': '../../../assets/svg/material-icons/menu.svg'
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
