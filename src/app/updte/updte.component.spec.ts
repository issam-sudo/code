import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdteComponent } from './updte.component';

describe('UpdteComponent', () => {
  let component: UpdteComponent;
  let fixture: ComponentFixture<UpdteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
