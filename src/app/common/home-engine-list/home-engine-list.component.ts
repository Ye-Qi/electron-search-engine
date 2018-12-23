import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-home-engine-list',
  templateUrl: './home-engine-list.component.html',
  styleUrls: ['./home-engine-list.component.scss']
})
export class HomeEngineListComponent implements OnInit {
  @Input() selected: string[] = []
  @Input() websites: {[key: string]: any} = {}
  @Output() itemClick: EventEmitter<any> = new EventEmitter()
  Object = Object
  constructor() {}
  ngOnInit() {}

  click(key) {
    this.itemClick.emit(key)
  }

}
