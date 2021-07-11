import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];

    if (!searchText) return items;

    return this.searchItems(items, searchText.toLowerCase());
  }

  private searchItems(items: any[], searchText): any[] {
    let results = [];
    items.forEach(it => {
      if (it.first_name.toLowerCase().includes(searchText)) {
        results.push(it);
      }
    });
    return results;
  }
}
