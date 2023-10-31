import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputlabel',
  templateUrl: './inputlabel.component.html',
  styleUrls: ['./inputlabel.component.css']
})
export class InputlabelComponent {

@Input() inputlabel='';
}
