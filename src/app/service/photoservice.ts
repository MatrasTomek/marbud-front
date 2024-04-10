import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
  getData() {
    return [
      {
        itemName: 'PRZYKŁADOWE REALIZACJE',
        itemDescription: '',
        images: [
          {
            itemImageSrc:
              '../../assets/images/works-page/building-1510561_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/building-1510561_640.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1',
          },
          {
            itemImageSrc: '../../assets/images/works-page/man-3107306_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/man-3107306_640.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/roof-truss-3339206_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/roof-truss-3339206_640.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/scaffold-1207389_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/scaffold-1207389_640.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/home-construction-4899200_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/home-construction-4899200_640.jpg',
            alt: 'Description for Image 5',
            title: 'Title 5',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/construction-19696_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/construction-19696_640.jpg',
            alt: 'Description for Image 6',
            title: 'Title 6',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/new-home-1664288_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/new-home-1664288_640.jpg',
            alt: 'Description for Image 7',
            title: 'Title 7',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/new-home-1664302_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/new-home-1664302_640.jpg',
            alt: 'Description for Image 8',
            title: 'Title 8',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/new-home-2897352_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/new-home-2897352_640.jpg',
            alt: 'Description for Image 9',
            title: 'Title 9',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/new-home-1664252_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/new-home-1664252_640.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/new-home-4083239_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/new-home-4083239_640.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11',
          },
          {
            itemImageSrc: '../../assets/images/works-page/roof-79171_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/roof-79171_640.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12',
          },
          {
            itemImageSrc: '../../assets/images/works-page/log-219677_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/log-219677_640.jpg',
            alt: 'Description for Image 13',
            title: 'Title 13',
          },
          {
            itemImageSrc:
              '../../assets/images/works-page/industry-3281999_1920.jpg',
            thumbnailImageSrc:
              '../../assets/images/works-page/industry-3281999_640.jpg',
            alt: 'Description for Image 14',
            title: 'Title 14',
          },
        ],
      },
    ];
  }

  getItems() {
    return Promise.resolve(this.getData());
  }
}
