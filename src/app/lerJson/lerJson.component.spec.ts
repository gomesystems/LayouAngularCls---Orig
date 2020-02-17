/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LerJsonComponent } from './lerJson.component';

describe('LerJsonComponent', () => {
  let component: LerJsonComponent;
  let fixture: ComponentFixture<LerJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LerJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LerJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
