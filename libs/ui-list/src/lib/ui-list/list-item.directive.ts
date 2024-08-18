import { Directive, input } from '@angular/core';

@Directive({
  selector: '[listItem]',
  standalone: true,
})
export class ListItemDirective<T> {
  listItem = input.required<T>();
  static ngTemplateContextGuard<T>(
    _directive: ListItemDirective<T>,
    ctx: unknown,
  ): ctx is { $implicit: T } {
    return true;
  }
}
