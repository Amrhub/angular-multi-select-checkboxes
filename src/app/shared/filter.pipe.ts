import { Pipe, PipeTransform } from '@angular/core';

interface Filter {
  filterProperty?: string;
  value: string;
}

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform<T>(items: T[], filter: Filter): T[] {
    if (!items || !filter.value) {
      return items;
    }

    return items.filter((item: any) => {
      if (filter.filterProperty) {
        if (typeof item[filter.filterProperty] === 'string') {
          return item[filter.filterProperty].toLowerCase().includes(filter.value.toLowerCase());
        } else {
          return item[filter.filterProperty] === filter.value;
        }
      } else {
        if (typeof item === 'string') {
          return item.toLowerCase().includes(filter.value.toLowerCase());
        } else {
          return item === filter.value;
        }
      }
    });
  }
}
