import { Directive, input, TemplateRef } from '@angular/core';

export type Context<T> = { $implicit: T };
export const options = <T>() => ({ read: TemplateRef<Context<T>> });

@Directive({
  selector: '[listItem]',
  standalone: true,
})
export class ListItemDirective<T> {
  listItem = input.required<T>();
  static ngTemplateContextGuard<T>(_directive: ListItemDirective<T>, ctx: unknown): ctx is { $implicit: T } {
    return true;
  }
}
