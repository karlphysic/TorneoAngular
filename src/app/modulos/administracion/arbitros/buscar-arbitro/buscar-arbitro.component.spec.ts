import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarArbitroComponent } from './buscar-arbitro.component';

describe('BuscarArbitroComponent', () => {
  let component: BuscarArbitroComponent;
  let fixture: ComponentFixture<BuscarArbitroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarArbitroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarArbitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
