import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concepts } from './concepts';

describe('Concepts', () => {
  let component: Concepts;
  let fixture: ComponentFixture<Concepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concepts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Concepts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
