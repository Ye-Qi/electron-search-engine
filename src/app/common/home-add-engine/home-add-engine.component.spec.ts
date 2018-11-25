import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddEngineComponent } from './home-add-engine.component';

describe('HomeAddEngineComponent', () => {
  let component: HomeAddEngineComponent;
  let fixture: ComponentFixture<HomeAddEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
