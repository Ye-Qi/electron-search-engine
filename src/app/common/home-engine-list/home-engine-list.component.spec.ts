import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEngineListComponent } from './home-engine-list.component';

describe('HomeEngineListComponent', () => {
  let component: HomeEngineListComponent;
  let fixture: ComponentFixture<HomeEngineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEngineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEngineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
