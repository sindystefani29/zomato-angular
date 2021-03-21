import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.config.getPodcast().subscribe((data) => console.log(data));
  }

}
