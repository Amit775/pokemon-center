import { signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import type { GameContext, ReferenceData, TypeChart } from '@pokemon-center/domain-school-engine';
import { SchoolProgressStore } from '../../school-progress.store';
import { SchoolReference } from '../../school-reference';
import SchoolHomeComponent from './school-home.component';

/** Enough of a chart to count as loaded — `isLessonPlayable` asks whether a section is present. */
const TYPE_CHART: TypeChart = {
	types: ['fire', 'water'],
	factor: { fire: { fire: 0.5, water: 0.5 }, water: { fire: 2, water: 0.5 } },
};

/** Stands in for the real one, which reaches for HttpClient the moment it is constructed. */
class ReferenceStub {
	readonly data = signal<ReferenceData>({ typeChart: TYPE_CHART });
	readonly versionGroup = signal<string | null>(null);
	readonly isLoading = signal(false);
	readonly hasError = signal(false);
	readonly typeChart = signal<TypeChart | null>(TYPE_CHART);
	reference(): ReferenceData {
		return this.data();
	}
	context(): GameContext {
		return { versionGroup: null, generation: null };
	}
}

describe('SchoolHomeComponent', () => {
	let fixture: ComponentFixture<SchoolHomeComponent>;
	let reference: ReferenceStub;
	let progress: InstanceType<typeof SchoolProgressStore>;

	const cards = (): HTMLElement[] => Array.from(fixture.nativeElement.querySelectorAll('.lesson'));
	const cardTitled = (title: string): HTMLElement =>
		cards().find((card) => (card.querySelector('a, .locked-title')?.textContent ?? '').includes(title)) as HTMLElement;
	const linkIn = (title: string): HTMLAnchorElement | null => cardTitled(title).querySelector('a');

	beforeEach(async () => {
		localStorage.clear();
		reference = new ReferenceStub();

		await TestBed.configureTestingModule({
			imports: [SchoolHomeComponent],
			providers: [provideRouter([]), { provide: SchoolReference, useValue: reference }],
		}).compileComponents();

		fixture = TestBed.createComponent(SchoolHomeComponent);
		progress = TestBed.inject(SchoolProgressStore);
		fixture.detectChanges();
	});

	it('opens root lessons whose reference data has arrived', () => {
		expect(linkIn('Single-type effectiveness')?.getAttribute('href')).toContain('/school/lesson/type-chart.single-type-effectiveness');
	});

	it('locks lessons whose prerequisites are unmet, and says which', () => {
		const card = cardTitled('Immunities');
		expect(card.querySelector('a')).toBeNull();
		expect(card.textContent).toContain('Needs: Single-type effectiveness');
	});

	it('distinguishes "not unlocked yet" from "data has not loaded"', () => {
		// Damage is a root lesson — the graph allows it, but its move data is absent, and the two
		// read very differently to a learner.
		const card = cardTitled('Expected damage');
		expect(card.querySelector('a')).toBeNull();
		expect(card.textContent).toContain('reference data');
		expect(card.textContent).not.toContain('Needs:');
	});

	it('opens a lesson once its data arrives', () => {
		reference.data.set({ typeChart: TYPE_CHART, moves: [] });
		fixture.detectChanges();

		expect(linkIn('Expected damage')?.getAttribute('href')).toContain('/school/lesson/damage.expected-damage');
	});

	it('routes simulations to /school/simulation and labels them', () => {
		// Coverage needs both: dual-type multipliers unlocked (grant it rather than mastering it)
		// *and* the move table loaded, since it builds its options from real moves.
		progress.applyPlacement(['type-chart.dual-type-multipliers']);
		reference.data.set({ typeChart: TYPE_CHART, moves: [] });
		fixture.detectChanges();

		const card = cardTitled('Four-move coverage');
		expect(card.querySelector('a')?.getAttribute('href')).toContain('/school/simulation/coverage.four-move-coverage');
		expect(card.textContent).toContain('simulation');
	});

	it('the unlock-everything toggle opens locked lessons', () => {
		expect(cardTitled('Immunities').querySelector('a')).toBeNull();

		progress.setUnlockOverride(true);
		fixture.detectChanges();

		expect(linkIn('Immunities')).not.toBeNull();
	});

	it('placement grants open a lesson without claiming mastery', () => {
		progress.applyPlacement(['type-chart.single-type-effectiveness']);
		fixture.detectChanges();

		expect(linkIn('Immunities')).not.toBeNull();
		expect(cardTitled('Single-type effectiveness').textContent).not.toContain('mastered');
	});

	it('offers all four ways in', () => {
		const bar = fixture.nativeElement.querySelector('.bar').textContent;
		for (const label of ['Start a drill', 'Practise weak spots', 'Placement test', 'Unlock everything']) {
			expect(bar).toContain(label);
		}
	});

	it('names the era being studied', () => {
		expect(fixture.nativeElement.querySelector('.era').textContent).toContain('all games');

		reference.versionGroup.set('red-blue');
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('.era').textContent).toContain('red-blue');
	});

	it('warns when the chart could not be loaded at all', () => {
		reference.typeChart.set(null);
		reference.hasError.set(true);
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.era').textContent).toContain('pokedex-service');
	});

	it('stays quiet about weak spots until there is history to rank', () => {
		expect(fixture.nativeElement.textContent).not.toContain('Most in need of practice');

		progress.recordFor('type-chart.single-type-effectiveness', {
			correct: false,
			deepestHintTier: null,
			atISO: new Date().toISOString(),
		});
		fixture.detectChanges();

		expect(fixture.nativeElement.textContent).toContain('Most in need of practice');
	});
});
