import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicalesComponent } from './tropicales.component';

describe('TropicalesComponent', () => {
  let component: TropicalesComponent;
  let fixture: ComponentFixture<TropicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropicalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TropicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
