import { Component, OnInit } from '@angular/core';
import { CarouselService } from "src/app/components/pages/home/carousel.service";
import { SlideI } from "src/app/shared/models/slide.interface";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides$: Observable<SlideI[]>;

  constructor(private slideSvc: CarouselService) { }

  ngOnInit(): void {
    this.slides$ = this.slideSvc.GetAllSlides();
  }
}