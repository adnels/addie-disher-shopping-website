import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingToolComponent } from './shopping-tool.component';

describe('ShoppingToolComponent', () => {
  let component: ShoppingToolComponent;
  let fixture: ComponentFixture<ShoppingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
