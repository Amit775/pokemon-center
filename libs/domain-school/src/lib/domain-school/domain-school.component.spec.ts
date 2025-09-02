import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainSchoolComponent } from './domain-school.component';

describe('DomainSchoolComponent', () => {
  let component: DomainSchoolComponent;
  let fixture: ComponentFixture<DomainSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainSchoolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DomainSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
