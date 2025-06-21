import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RleComponent } from './rle.component';

describe('RleComponent', () => {
  let component: RleComponent;
  let fixture: ComponentFixture<RleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
