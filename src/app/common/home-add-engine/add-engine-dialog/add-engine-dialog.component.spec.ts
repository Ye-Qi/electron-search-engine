import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEngineDialogComponent } from './add-engine-dialog.component';

describe('AddEngineDialogComponent', () => {
  let component: AddEngineDialogComponent;
  let fixture: ComponentFixture<AddEngineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEngineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEngineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
