import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export default class SearchService {
  private searchSource = new Subject<string>()

  search$ = this.searchSource.asObservable()

  constructor() { }

  search (text: string) {
    this.searchSource.next(text)
  }
}
