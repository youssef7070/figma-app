import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./components/nav/nav";
import { TopNav } from "./components/top-nav/top-nav";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Services } from "./components/services/services";
import { PricePlans } from "./components/price-plans/price-plans";
import { RecentWorks } from "./components/recent-works/recent-works";
import { Title } from "./components/title/title";
import { ServicesFooter } from "./components/services-footer/services-footer";
import { ProvideExcellentServices } from "./components/provide-excellent-services/provide-excellent-services";
import { Customers } from "./components/customers/customers";
import { TitleTwo } from "./components/title-two/title-two";
import { Partaners } from "./components/partaners/partaners";
import { Blogs } from "./components/blogs/blogs";
import { BgTitle } from "./components/bg-title/bg-title";

@Component({
  selector: 'app-root',
  imports: [Nav, TopNav, Header, Footer, Services, PricePlans, RecentWorks, Title, ServicesFooter, ProvideExcellentServices, Customers, TitleTwo, Partaners, Blogs, BgTitle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('figma-app');
}
