import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/service/photoservice';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  galleryItems!: any[];

  responsiveOptions!: any[];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getItems().then((items) => (this.galleryItems = items));
  }
}
