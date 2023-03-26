import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerHomePAgeComponent } from './customerhomepage.component';

describe('CustomerHomePAgeComponent', () => {
  let component: CustomerHomePAgeComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CustomerHomePAgeComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CustomerHomePAgeComponent);
    component = fixture.componentInstance;
  });
  it('FE_customerHomePageTest', () => {
    expect(component).toBeTruthy();
  });
});