import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-title',
  imports: [],
  templateUrl: './bg-title.html',
  styleUrl: './bg-title.css'
})
export class BgTitle {
  titleRow: string = "/title/Right Arrow.svg"
  @Input() title: string = '';
  @Input() description: string = '';
}
