import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  effect,
  input,
  model,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkVirtualScrollViewport,
  ExtendedScrollToOptions,
  ScrollingModule,
} from '@angular/cdk/scrolling';
import { ListItemDirective } from './list-item.directive';
import { tap } from 'rxjs';

@Component({
  selector: 'app-ui-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> {
  list = input.required<T[]>();
  offset = model<number>(0);

  content = contentChild.required(ListItemDirective<T>, {
    read: TemplateRef<{ $implicit: T }>,
  });
  viewport = viewChild.required('viewport', { read: CdkVirtualScrollViewport });

  scrolled = effect((cleanup) => {
    const viewport = this.viewport();

    const subscription = viewport.scrolledIndexChange
      .pipe(tap(() => this.offset.set(viewport.measureScrollOffset('bottom'))))
      .subscribe();

    cleanup(() => subscription.unsubscribe());
  });

  offsetEffect = effect(() =>
    this.viewport().scrollTo({ bottom: this.offset() }),
  );

  log = effect(() => console.log(this.list()));

  public scrollTo(options: ExtendedScrollToOptions): void {
    this.viewport().scrollTo(options);
  }
}
