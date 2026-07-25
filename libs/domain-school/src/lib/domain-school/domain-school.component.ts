import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** School shell — chrome shared by the home, lesson and drill routes. */
@Component({
	selector: 'school-root',
	imports: [RouterOutlet],
	templateUrl: './domain-school.component.html',
	styleUrl: './domain-school.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DomainSchoolComponent {}
