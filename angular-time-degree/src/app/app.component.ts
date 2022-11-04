import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-time-degrees';
	time = { hour: 12, minute: 0 };
  degrees = 0;
  setDegrees(){
    if(this.time){
      let hour;
      //Get hour for AM & PM
      if(this.time.hour >= 12){
        hour = this.time.hour - 12
      }
      else hour = this.time.hour
      let hourDegrees = hour * 30;
      let minDegrees = this.time.minute * 6;
      //set degress to postive difference
      this.degrees = hourDegrees > minDegrees ?
                     hourDegrees - minDegrees :
                     minDegrees - hourDegrees
    }
  }
}
