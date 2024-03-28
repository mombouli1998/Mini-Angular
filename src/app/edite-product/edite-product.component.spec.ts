import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeProductComponent } from './edite-product.component';

describe('EditeProductComponent', () => {
  let component: EditeProductComponent;
  let fixture: ComponentFixture<EditeProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeProductComponent]
    });
    fixture = TestBed.createComponent(EditeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
