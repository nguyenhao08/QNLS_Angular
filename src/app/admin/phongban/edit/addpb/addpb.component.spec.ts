import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpbComponent } from './addpb.component';

describe('AddpbComponent', () => {
  let component: AddpbComponent;
  let fixture: ComponentFixture<AddpbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
