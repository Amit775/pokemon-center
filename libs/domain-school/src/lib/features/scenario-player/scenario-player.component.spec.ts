import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { Attempt, HintTier, Scenario, ScenarioResult } from '@pokemon-center/domain-school-engine';
import { ScenarioPlayerComponent } from './scenario-player.component';

/**
 * Option ids repeat between scenarios (the same moves come round again), which is the shape that
 * broke the exercise player — CDK listbox state surviving an input change.
 */
function scenarioWith(id: string, pick: number): Scenario {
	return {
		id,
		lessonId: 'coverage.four-move-coverage',
		seed: 1,
		prompt: `prompt ${id}`,
		pick,
		options: [
			{ id: 'a', label: 'Alpha', detail: 'Fire · 90 power' },
			{ id: 'b', label: 'Beta' },
			{ id: 'c', label: 'Gamma' },
			{ id: 'd', label: 'Delta' },
		],
		hints: ([1, 2, 3, 4] as HintTier[]).map((tier) => ({ tier, text: `hint ${tier}` })),
		grade(selected: readonly string[]): ScenarioResult {
			// "a" is worth 2, anything else 1 — so an optimal pick is distinguishable from a
			// merely valid one, which is the whole point of grading on a scale.
			const achieved = selected.reduce((sum, choice) => sum + (choice === 'a' ? 2 : 1), 0);
			const optimal = pick === 1 ? 2 : pick + 1;
			return {
				quality: Math.min(1, achieved / optimal),
				achieved,
				optimal,
				optimalIds: pick === 1 ? ['a'] : ['a', ...['b', 'c', 'd'].slice(0, pick - 1)],
				summary: 'summary text',
			};
		},
	};
}

@Component({
	standalone: true,
	imports: [ScenarioPlayerComponent],
	template: `<school-scenario-player [scenario]="scenario()" (answered)="attempts.push($event)" />`,
})
class HostComponent {
	readonly scenario = signal(scenarioWith('first', 1));
	readonly attempts: Attempt[] = [];
}

describe('ScenarioPlayerComponent', () => {
	let fixture: ComponentFixture<HostComponent>;
	let host: HostComponent;

	const el = (selector: string): HTMLElement | null => fixture.nativeElement.querySelector(selector);
	const options = (): HTMLElement[] => Array.from(fixture.nativeElement.querySelectorAll('.option'));
	const optionAt = (index: number): HTMLElement => options()[index];
	const buttonLabelled = (text: string): HTMLButtonElement | undefined =>
		Array.from(fixture.nativeElement.querySelectorAll<HTMLButtonElement>('.actions button')).find((b) =>
			(b.textContent ?? '').includes(text),
		);
	const chosenCount = (): number => fixture.nativeElement.querySelectorAll('.option.is-chosen').length;

	const click = (index: number): void => {
		optionAt(index).click();
		fixture.detectChanges();
	};
	const press = (key: string): void => {
		(el('.options') as HTMLElement).dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }));
		fixture.detectChanges();
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
		fixture = TestBed.createComponent(HostComponent);
		host = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('renders every option with its detail line', () => {
		expect(options()).toHaveLength(4);
		expect(el('.detail')?.textContent).toContain('Fire · 90 power');
	});

	it('will not submit before the required number is chosen', () => {
		expect(buttonLabelled('Lock it in')?.disabled).toBe(true);
		click(0);
		expect(buttonLabelled('Lock it in')?.disabled).toBe(false);
	});

	it('grades on a scale rather than right or wrong', () => {
		click(1); // "Beta" — valid but not optimal
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();

		expect(host.attempts).toHaveLength(1);
		expect(host.attempts[0].quality).toBeGreaterThan(0);
		expect(host.attempts[0].quality).toBeLessThan(1);
		expect(host.attempts[0].correct).toBe(false);
	});

	it('reports full quality for the optimal choice', () => {
		click(0); // "Alpha"
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();

		expect(host.attempts[0].quality).toBe(1);
		expect(host.attempts[0].correct).toBe(true);
		expect(el('.verdict')?.textContent).toContain('Optimal.');
	});

	it('marks the best answer after submitting, so the gap is visible', () => {
		click(1);
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelectorAll('.option.is-optimal')).toHaveLength(1);
		expect(optionAt(0).classList).toContain('is-optimal');
	});

	it('ignores further submissions of the same scenario', () => {
		click(0);
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();
		click(1);
		fixture.detectChanges();

		expect(host.attempts).toHaveLength(1);
	});

	it('clears selection and verdict when a new scenario arrives', () => {
		click(0);
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();

		host.scenario.set(scenarioWith('second', 1));
		fixture.detectChanges();

		expect(el('.verdict')).toBeNull();
		expect(chosenCount()).toBe(0);
	});

	it('accepts the same option id again on the next scenario', () => {
		// The exercise player's bug, checked here before it can happen: an uncontrolled listbox
		// would treat the repeat as "no change" and drop it.
		click(0);
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();

		host.scenario.set(scenarioWith('second', 1));
		fixture.detectChanges();

		click(0);
		expect(chosenCount()).toBe(1);
		expect(buttonLabelled('Lock it in')?.disabled).toBe(false);
	});

	it('reveals hints one tier at a time and weights the attempt by the deepest', () => {
		buttonLabelled('hint')?.click();
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll('.hints li')).toHaveLength(1);

		click(0);
		buttonLabelled('Lock it in')?.click();
		fixture.detectChanges();

		expect(host.attempts[0].deepestHintTier).toBe(1);
	});

	describe('multi-pick', () => {
		beforeEach(() => {
			host.scenario.set(scenarioWith('multi', 3));
			fixture.detectChanges();
		});

		it('refuses to select more than the scenario asks for', () => {
			click(0);
			click(1);
			click(2);
			click(3);
			expect(chosenCount()).toBe(3);
		});

		it('shows progress while choosing, without revealing the target', () => {
			click(0);
			const progress = el('.progress')?.textContent ?? '';
			expect(progress).toContain('1 of 3 chosen');
			expect(progress).toContain('reaching');
			// The optimum is never on screen before submitting.
			expect(progress).not.toContain('optimal');
		});

		it('toggles a choice off when picked twice', () => {
			click(0);
			expect(chosenCount()).toBe(1);
			click(0);
			expect(chosenCount()).toBe(0);
		});
	});

	describe('keyboard', () => {
		it('selects with number keys', () => {
			press('1');
			expect(chosenCount()).toBe(1);
		});

		it('toggles the same key off again', () => {
			press('1');
			press('1');
			expect(chosenCount()).toBe(0);
		});

		it('reveals a hint with H', () => {
			press('h');
			expect(fixture.nativeElement.querySelectorAll('.hints li')).toHaveLength(1);
		});

		it('submits with Enter once a choice is made', () => {
			press('1');
			press('Enter');
			expect(host.attempts).toHaveLength(1);
		});

		it('does nothing on Enter before a choice is made', () => {
			press('Enter');
			expect(host.attempts).toHaveLength(0);
		});
	});
});
