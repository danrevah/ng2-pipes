import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "average" })
export class AveragePipe implements PipeTransform {
  transform(num: any[]): number;
  transform<T>(num: any): T;

  transform(arr: any): any {
    return Array.isArray(arr) ?
      arr.reduce((sum, curr) => sum + curr, 0) / arr.length :
      arr;
  }
}
