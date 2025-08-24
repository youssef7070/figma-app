import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  image1: string = "/services/img/image-1.jpg";
  image2: string = "/services/img/image-2.jpg";
  image3: string = "/services/img/image-3.jpg";
  image4: string = "/services/img/image-4.jpg";
  image5: string = "/services/img/image-5.jpg";
  image6: string = "/services/img/image-6.jpg";

  icon1: string = "/services/icons/icon-1.svg";
  icon2: string = "/services/icons/icon-2.svg";
  icon3: string = "/services/icons/icon-3.svg";
  icon4: string = "/services/icons/icon-4.svg";
  icon5: string = "/services/icons/icon-5.svg";
  icon6: string = "/services/icons/icon-6.svg";

  whiteRightRow: string = "/services/icons/WhiteRight Arrow.svg"
  RightRow: string = "/services/icons/Right Arrow.svg";

  lineUnder: string = "/icons/LineUnder.svg"
}
