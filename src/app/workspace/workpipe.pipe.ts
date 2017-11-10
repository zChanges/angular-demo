import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'workpipe'
})
export class WorkpipePipe implements PipeTransform {

  transform(value: any): any {
    return value + '000';
  }

}