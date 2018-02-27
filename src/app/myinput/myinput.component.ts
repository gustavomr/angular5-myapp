import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-myinput',
  templateUrl: './myinput.component.html',
  styleUrls: ['./myinput.component.css']
})
export class MyinputComponent implements OnInit {

  constructor() { }

  @Input() camelcase: boolean;

  values : any = '';

  ngOnInit() {
  }

  onKey(event: any) {
    
    if (this.camelcase) {
      this.values = event.target.value;
      this.values = this.values.toUpperCase();
    } 
  }
}
