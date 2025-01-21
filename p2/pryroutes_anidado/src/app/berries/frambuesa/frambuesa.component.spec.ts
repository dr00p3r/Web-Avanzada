import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrambuesaComponent } from './frambuesa.component';

describe('FrambuesaComponent', () => {
  let component: FrambuesaComponent;
  let fixture: ComponentFixture<FrambuesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrambuesaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrambuesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
