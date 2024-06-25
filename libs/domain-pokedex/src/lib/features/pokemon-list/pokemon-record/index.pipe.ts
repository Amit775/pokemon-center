import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ standalone: true, name: 'index' })
export class IndexPipe implements PipeTransform {
  transform(value: number): string {
    return `#${value.toString().padStart(3, '0')}`;
  }
}
