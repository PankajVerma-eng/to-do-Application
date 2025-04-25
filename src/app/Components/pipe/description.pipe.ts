import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
  standalone: true
})
export class DescriptionPipe implements PipeTransform {

  transform(value:any) { 
    if (typeof value !== 'string') return '';
  return value.length > 20 ? value.substr(0, 20) + ' ...' : value;
  }
}
