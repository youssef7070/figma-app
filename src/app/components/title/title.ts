import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css'
})
export class Title {
  titleRow: string = "/title/Right Arrow.svg"
  @Input() title: string = '';
  @Input() description: string = '';
}
