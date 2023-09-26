import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono-v2',
  templateUrl: './chrono-v2.component.html',
  styleUrls: ['./chrono-v2.component.scss']
})
export class ChronoV2Component {
  time: number = 0
  timer : any
  startChrono() {
    this.timer = setInterval(() => this.time++,1000);
  }
  pauseChrono() {
    clearInterval(this.timer);
    this.timer = null
  }

    
    ResetChrono() {
    this.pauseChrono()
      this.time = 0
    }
  }


