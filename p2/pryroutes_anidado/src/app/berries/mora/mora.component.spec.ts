import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoraComponent } from './mora.component';

describe('MoraComponent', () => {
  let component: MoraComponent;
  let fixture: ComponentFixture<MoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
