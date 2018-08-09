import { Component, OnInit, Input } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { MatIconRegistry } from '@angular/material'
import SearchService from '../../service/search.service'

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  private focusing = false
  private text = ''

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private searchService: SearchService) {
    iconRegistry.addSvgIcon(
      'ic-search',
      sanitizer.bypassSecurityTrustResourceUrl('node_modules/material-design-icons/action/svg/production/ic_search_48px.svg')
    )
    iconRegistry.addSvgIcon(
      'ic-close',
      sanitizer.bypassSecurityTrustResourceUrl('node_modules/material-design-icons/navigation/svg/production/ic_close_48px.svg')
    )
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
