import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [],
  templateUrl: './blogs.html',
  styleUrl: './blogs.css'
})
export class Blogs {
  image1: string = "/public/works&blocks/1.jpg;"
  image2: string = "works&blocks/2.jpg";
  image3: string = "/works&blocks/3.jpg";
  image4: string = "/works&blocks/4.jpg";

  calenderLogo: string = "/works&blocks/Calendar.svg";
  rowLogo: string = "/works&blocks/Arrow-Up-Right.svg ";

  whiteRow: string = "/services/icons/WhiteRight Arrow.svg";
}
