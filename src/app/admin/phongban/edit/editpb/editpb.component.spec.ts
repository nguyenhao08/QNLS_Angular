import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpbComponent } from './editpb.component';

describe('EditpbComponent', () => {
  let component: EditpbComponent;
  let fixture: ComponentFixture<EditpbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
