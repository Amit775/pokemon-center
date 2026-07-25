import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'school-root',
	templateUrl: './domain-school.component.html',
	styleUrl: './domain-school.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DomainSchoolComponent {}
