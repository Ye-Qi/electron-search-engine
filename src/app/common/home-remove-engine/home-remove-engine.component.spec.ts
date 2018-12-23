import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemoveEngineComponent } from './home-remove-engine.component';

describe('HomeRemoveEngineComponent', () => {
  let component: HomeRemoveEngineComponent;
  let fixture: ComponentFixture<HomeRemoveEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRemoveEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRemoveEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
