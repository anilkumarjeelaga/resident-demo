import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  // heroFormGroup: FormGroup;
  wards = ['ward 1','ward 2','ward 3'];
  wearables = ['uma _001','uma _002','uma _003'];
  rooms = ['room1','room2','room3'];

  heroObj = {
    'firstname': '',
    'lastname': '',
    'nickname': '',
    'phone': '',
    'height':'',
    'weight':'',
    'ward': '',
    'wearable':'',
    'room':'',
    'available': 'yes',
    'date':''
  };


  constructor() { }

  ngOnInit() {}

  onSubmit(heroForm) {
    console.log(heroForm);
    console.log(heroForm.value);
    console.log(this.heroObj);
    console.log(this.heroObj);
  }

 

}
