import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerStatusComponent } from './customerstatus.component';

describe('CustomerStatusComponent', () => {
  let component: CustomerStatusComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerStatusComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerStatusComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerStatusTest', () => {
    expect(component).toBeTruthy();
  });
});