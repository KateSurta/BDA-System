import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quarter'
})
export class QuarterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.slice(-1) + "кв "+ value.slice(0,4);
  }

}
