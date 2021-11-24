import { Component, OnInit } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-schedule';

@Component({
  selector: 'app-appointment',
  template: '<ejs-schedule [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>',
  //templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public setView: View = 'Month';
  public setDate: Date = new Date(2021, 10, 19);
  public eventObject: EventSettingsModel = {
    dataSource: [{
      EventTitle: "ABC",
      EventStart: new Date(2021, 10, 20, 4, 0),
      EventEnd: new Date(2021, 10, 20, 6, 0),
      //IsBlock: true,
      //IsReadonly: true,
      //RecurrenceRule: "FREQ=DAILY;INTERVAL=1;COUNT=10",
      //IsAllDay: true
    }],
    fields:{
      subject: {name : 'EventTitle' , default: 'Appointment' , title: 'Appointment Title'},
      startTime: {name : 'EventStart'},
      endTime: {name : 'EventEnd'}
    }
  }
}
