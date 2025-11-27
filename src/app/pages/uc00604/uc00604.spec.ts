import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc00604 } from './uc00604';

describe('Uc00604', () => {
  let component: Uc00604;
  let fixture: ComponentFixture<Uc00604>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Uc00604]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Uc00604);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
