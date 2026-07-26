import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import type { Attempt, Exercise, HintTier } from '@pokemon-center/domain-school-engine';
import { ExercisePlayerComponent } from './exercise-player.component';

/**
 * Candidate ids repeat between questions of the same lesson, which is exactly the situation
 * that broke selection: the listbox kept the previous answer, so answering the same way twice
 * in a row registered as "no change" and silently did nothing.
 */
function exerciseWith(id: string, correctId: 'x1' | 'x2'): Exercise {
	return {
		id,
		lessonId: 'type-chart.single-type-effectiveness',
		seed: 1,
		prompt: `prompt ${id}`,
		candidates: [
			{ id: 'x1', label: '1× — neutral', value: 1, correct: correctId === 'x1' },
			{ id: 'x2', label: '2× — super effective', value: 2, correct: correctId === 'x2' },
		],
		hints: ([1, 2, 3, 4] as HintTier[]).map((tier) => ({ tier, text: `hint ${tier}` })),
		explanation: 'because',
	};
}

@Component({
	standalone: true,
	imports: [ExercisePlayerComponent],
	template: `<school-exercise-player [exercise]="exercise()" (answered)="attempts.push($event)" />`,
})
class HostComponent {
	readonly exercise = signal(exerciseWith('first', 'x1'));
	readonly attempts: Attempt[] = [];
}

describe('ExercisePlayerComponent', () => {
	let fixture: ComponentFixture<HostComponent>;
	let host: HostComponent;

	const options = (): HTMLElement[] => Array.from(fixture.nativeElement.querySelectorAll('.option'));
	const optionWithId = (id: string): HTMLElement => options()[id === 'x1' ? 0 : 1];
	const click = (id: string): void => {
		optionWithId(id).click();
		fixture.detectChanges();
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [HostComponent] }).compileComponents();
		fixture = TestBed.createComponent(HostComponent);
		host = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('reports an answer when an option is clicked', () => {
		click('x1');
		expect(host.attempts).toHaveLength(1);
		expect(host.attempts[0].correct).toBe(true);
	});

	it('accepts the same answer id again on the next exercise', () => {
		click('x1');
		expect(host.attempts).toHaveLength(1);

		// A new question whose options carry the same ids — the regression.
		host.exercise.set(exerciseWith('second', 'x2'));
		fixture.detectChanges();

		click('x1');
		expect(host.attempts).toHaveLength(2);
		expect(host.attempts[1].correct).toBe(false);
	});

	it('clears the previous selection when a new exercise arrives', () => {
		click('x1');
		host.exercise.set(exerciseWith('second', 'x2'));
		fixture.detectChanges();

		expect(fixture.nativeElement.querySelector('.verdict')).toBeNull();
		expect(options().some((option) => option.getAttribute('aria-selected') === 'true')).toBe(false);
	});

	it('ignores a second answer to the same question', () => {
		click('x1');
		click('x2');
		expect(host.attempts).toHaveLength(1);
	});

	it('reports the deepest hint used, so credit can be weighted', () => {
		const hintButton = fixture.nativeElement.querySelector('.actions button') as HTMLButtonElement;
		hintButton.click();
		fixture.detectChanges();
		hintButton.click();
		fixture.detectChanges();

		click('x1');
		expect(host.attempts[0].deepestHintTier).toBe(2);
	});

	it('reports no hint tier when answered unaided', () => {
		click('x1');
		expect(host.attempts[0].deepestHintTier).toBeNull();
	});
});
