import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CekilisBaslaComponent } from './cekilis-basla.component';

describe('CekilisBaslaComponent', () => {
  let component: CekilisBaslaComponent;
  let fixture: ComponentFixture<CekilisBaslaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekilisBaslaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekilisBaslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
