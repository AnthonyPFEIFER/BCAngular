import { Pipe, PipeTransform } from '@angular/core';
import { Advert } from 'src/app/models/advert';
@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: Advert[], filter: Advert): Advert[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item: Advert) => this.searchFilter(item, filter));
  }


  searchFilter(item: Advert, filter: Advert): boolean {
    // tslint:disable-next-line: prefer-const
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          /*           if (item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                      return false;
                    } */
        } else if (typeof filter[field] === 'number') {
          if (item[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
