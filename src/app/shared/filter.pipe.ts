import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: { filterProperty?: any; value: any }): any {
    if (!items || !filter.value) {
      return items;
    }

    return items.filter((item) => {
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
