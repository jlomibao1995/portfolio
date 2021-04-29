import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NventoryProjComponent } from './nventory-proj.component';

describe('NventoryProjComponent', () => {
  let component: NventoryProjComponent;
  let fixture: ComponentFixture<NventoryProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NventoryProjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NventoryProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
