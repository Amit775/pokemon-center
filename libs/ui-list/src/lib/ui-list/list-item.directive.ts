import { Directive, input } from '@angular/core';

@Directive({
  selector: '[listItem]',
})
export class ListItemDirective<T> {
  item = input.required<T>();
  static ngTemplateContextGuard<T>(
    dir: ListItemDirective<T>,
    ctx: unknown,
  ): ctx is { $implicit: T } {
    return true;
  }
}
