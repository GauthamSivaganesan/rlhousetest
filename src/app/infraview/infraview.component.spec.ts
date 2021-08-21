import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraviewComponent } from './infraview.component';

describe('InfraviewComponent', () => {
  let component: InfraviewComponent;
  let fixture: ComponentFixture<InfraviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfraviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
