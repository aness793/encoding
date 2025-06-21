import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShannonFanoComponent } from './shannon-fano.component';

describe('ShannonFanoComponent', () => {
  let component: ShannonFanoComponent;
  let fixture: ComponentFixture<ShannonFanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShannonFanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShannonFanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
