import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root of both apps.
 *
 * Deliberately empty chrome: the header belongs to whichever shell is routed underneath, so
 * that Nuzlocke and Champions can look and navigate like separate products while sharing one
 * build. Anything rendered here would leak between them.
 */
@Component({
	imports: [RouterOutlet],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
