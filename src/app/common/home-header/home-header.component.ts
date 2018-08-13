import { Component, OnInit, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import SearchService from '../../service/search/search.service'

const ICONS = {
  'ic-search': 'node_modules/material-design-icons/action/svg/production/ic_search_48px.svg',
  'ic-close': 'node_modules/material-design-icons/action/svg/production/ic_search_48px.svg',
  'ic-menu': 'node_modules/material-design-icons/navigation/svg/production/ic_menu_48px.svg'
}

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  private focusing = false
  private text = ''

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private searchService: SearchService) {
    const iconNames = Object.keys(ICONS);
    iconNames.forEach((name) => {
      iconRegistry.addSvgIcon(
        name,
        sanitizer.bypassSecurityTrustResourceUrl(ICONS[name])
      )
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
