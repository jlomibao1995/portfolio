import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpProjComponent } from './pp-proj.component';

describe('PpProjComponent', () => {
  let component: PpProjComponent;
  let fixture: ComponentFixture<PpProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
