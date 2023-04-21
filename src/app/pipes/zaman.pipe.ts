import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zaman',
})
export class ZamanPipe implements PipeTransform {
  TimeParseDate(time: any) {
    time = new Date(time);
    return (
      time.getFullYear() +
      '-' +
      this.AddZero(time.getMonth() + 1) +
      '-' +
      this.AddZero(time.getDate())
    );
  }

  AddZero(num: any) {
    return ('00' + num).slice(-2);
  }

  transform(value: string): unknown {
    return value != undefined && value.length > 5
      ? this.TimeParseDate(value)
      : '';
  }
}
