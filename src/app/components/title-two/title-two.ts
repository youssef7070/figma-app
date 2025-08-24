import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-two',
  imports: [],
  templateUrl: './title-two.html',
  styleUrl: './title-two.css'
})
export class TitleTwo {
  titleRow: string = "/title/Right Arrow.svg"
  @Input() titleTwo: string = '';
  @Input() descriptionTwo: string = '';
}
