import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditluongComponent } from './editluong.component';

describe('EditluongComponent', () => {
  let component: EditluongComponent;
  let fixture: ComponentFixture<EditluongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditluongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditluongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
