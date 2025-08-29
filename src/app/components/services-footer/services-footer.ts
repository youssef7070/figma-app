import { Component } from '@angular/core';

@Component({
  selector: 'app-services-footer',
  imports: [],
  templateUrl: './services-footer.html',
  styleUrl: './services-footer.css'
})
export class ServicesFooter {
  image: string = "./services/img/image-under-services.jpg";

  checkIcon: string = "./icons/Check.svg";
  rowUp: string = "./services/icons/Arrow-Up-Right.svg"
}
