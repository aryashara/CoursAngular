import { Component } from '@angular/core';

@Component({
  selector: 'app-exos1',
  templateUrl: './exos1.component.html',
 
})
export class Exos1Component {
  chrono: number = 0
  intervalChrono: any
  startChrono() {
    this.intervalChrono = setInterval(() => { this.chrono++ }, 1000)
    
  }
  stopChrono() {
    clearInterval(this.intervalChrono)

  }
  resetChrono() {
    this.chrono = 0
  }
}
