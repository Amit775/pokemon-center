import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { default as DomainSchoolComponent } from './domain-school.component';

describe('DomainSchoolComponent', () => {
	let component: DomainSchoolComponent;
	let fixture: ComponentFixture<DomainSchoolComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DomainSchoolComponent],
			// The shell hosts a router-outlet for the home/lesson/drill children.
			providers: [provideRouter([])],
		}).compileComponents();

		fixture = TestBed.createComponent(DomainSchoolComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
