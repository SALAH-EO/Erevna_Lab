import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDVsComponent } from './rdvs.component';

describe('RDVsComponent', () => {
  let component: RDVsComponent;
  let fixture: ComponentFixture<RDVsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDVsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
