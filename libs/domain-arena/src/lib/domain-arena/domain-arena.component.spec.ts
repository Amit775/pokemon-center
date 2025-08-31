import { ComponentFixture, TestBed } from '@angular/core/testing';
import { default as DomainArenaComponent } from './domain-arena.component';

describe('DomainArenaComponent', () => {
	let component: DomainArenaComponent;
	let fixture: ComponentFixture<DomainArenaComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DomainArenaComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(DomainArenaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
