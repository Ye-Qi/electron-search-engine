import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEngineDialogComponent } from './list-engine-dialog.component';

describe('ListEngineDialogComponent', () => {
  let component: ListEngineDialogComponent;
  let fixture: ComponentFixture<ListEngineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEngineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEngineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
