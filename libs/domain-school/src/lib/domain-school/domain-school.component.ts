import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GuessPalleteComponent } from "./features/guess-pallete/guess-pallete.component";

@Component({
	selector: 'school-root',
	imports: [GuessPalleteComponent],
	templateUrl: './domain-school.component.html',
	styleUrl: './domain-school.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DomainSchoolComponent {}
