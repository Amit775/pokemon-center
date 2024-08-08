import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ListItemDirective } from './list-item.directive';

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
  content = contentChild.required(ListItemDirective<T>, {
    read: TemplateRef<{ $implicit: T }>,
  });
}
