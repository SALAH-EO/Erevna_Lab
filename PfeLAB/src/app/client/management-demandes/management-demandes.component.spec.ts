import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDemandesComponent } from './management-demandes.component';

describe('ManagementDemandesComponent', () => {
  let component: ManagementDemandesComponent;
  let fixture: ComponentFixture<ManagementDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
