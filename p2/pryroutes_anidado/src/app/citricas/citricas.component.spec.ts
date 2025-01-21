import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitricasComponent } from './citricas.component';

describe('CitricasComponent', () => {
  let component: CitricasComponent;
  let fixture: ComponentFixture<CitricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitricasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
