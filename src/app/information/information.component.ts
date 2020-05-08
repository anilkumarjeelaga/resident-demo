import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
 Data:any = [];
  constructor() { }

  ngOnInit(): void {
  }
  onPostAdded(event) { 
    console.log (this.Data = event);
  }

}
