import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimaComponent } from './lima.component';

describe('LimaComponent', () => {
  let component: LimaComponent;
  let fixture: ComponentFixture<LimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LimaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
