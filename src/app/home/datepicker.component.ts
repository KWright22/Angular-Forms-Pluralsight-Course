import { Component } from '@angular/core';

@Component({ 
 templateUrl: './home.component.html'
})

export class DatePickerComponent {
    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    showWeekNumbers: false;

    bsValue: Date = new Date();
    bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];
}