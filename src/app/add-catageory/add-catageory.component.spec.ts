import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatageoryComponent } from './add-catageory.component';

describe('AddCatageoryComponent', () => {
  let component: AddCatageoryComponent;
  let fixture: ComponentFixture<AddCatageoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatageoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatageoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
