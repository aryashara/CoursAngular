import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {
  transform(value: number): string {
    let sec = value % 60;
    let min = Math.floor(value / 60)//Math.floor = division entiere
    let returnString: string = `${(min < 10 ? '0' : '')}${min} minutes et ${sec} seconds`
    return returnString;
  }
}
