import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/service/photoservice';
import { opinionsData } from 'src/assets/constansData/opinionsData';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  galleryItems!: any[];

  responsiveOptions!: any[];

  opinionsData;

  constructor(private photoService: PhotoService) {
    this.opinionsData = opinionsData;
  }

  ngOnInit() {
    this.photoService.getItems().then((items) => (this.galleryItems = items));
  }
}
