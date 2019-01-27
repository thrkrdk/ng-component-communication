import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CekilisSonucComponent } from './cekilis-sonuc.component';

describe('CekilisSonucComponent', () => {
  let component: CekilisSonucComponent;
  let fixture: ComponentFixture<CekilisSonucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekilisSonucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekilisSonucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
