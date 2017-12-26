import {Component} from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.services';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = [];
  model = new Employee('', 'Off', true, 'W2', 'default');
  hasPrimaryLanguageError = false;
  startDate: Date;
  minDate = new Date(2017, 5, 10);
  maxDate = new Date('December 25 2017');
  mytime: Date = new Date();
  mstep: number = 15;
  options: any = {
    mstep: [1, 5, 10, 15, 25, 30]
  };
  singleModel: string = '1';
  radioModel: string = 'Middle';
  max: number = 10;
  rate: number = 7;
  isReadonly: boolean = false;

  constructor(private formPoster: FormPoster) {
    this.formPoster.getLanguages()
                   .subscribe(
                     data => this.languages = data.languages,
                     err => console.log('get error: ', err)
                   );
  }

  submitForm(employeeForm: NgForm) {
    // validate form
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError)
      return;

    this.formPoster.postEmployeeForm(this.model)
        .subscribe(
          data => console.log('success: ', data),
          error => console.log('error: ', error)
        )
  }

  validatePrimaryLanguage(value){
      if (value === 'default')
        this.hasPrimaryLanguageError = true;
      else
        this.hasPrimaryLanguageError = false;
      
      console.log(this.model.primaryLanguage);
      console.log(this.hasPrimaryLanguageError);
  }
}