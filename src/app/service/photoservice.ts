import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
  getData() {
    return [
      {
        itemName: 'Nazwa-1',
        itemDescription:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam in neque quaerat reiciendis assumenda quis deserunt iste unde, repellendus animi quae, suscipit, et tempore iure! Ex quisquam ipsa tenetur? Vero.',
        images: [
          {
            itemImageSrc:
              '../../assets/images/realizations/building-3331438_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/building-3331438_640.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1',
          },
          {
            itemImageSrc:
              '../../assets/images/realizations/framework-3404581_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/framework-3404581_640.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2',
          },
          {
            itemImageSrc:
              '../../assets/images/realizations/building-1510561_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/building-1510561_640.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3',
          },
          {
            itemImageSrc:
              '../../assets/images/realizations/tools-864983_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/tools-864983_640.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4',
          },
        ],
      },
      {
        itemName: 'Nazwa-2',
        itemDescription:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam in neque quaerat reiciendis assumenda quis deserunt iste unde, repellendus animi quae, suscipit, et tempore iure! Ex quisquam ipsa tenetur? Vero.',
        images: [
          {
            itemImageSrc:
              '../../assets/images/realizations/building-3331438_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/building-3331438_640.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1',
          },
          {
            itemImageSrc:
              '../../assets/images/realizations/framework-3404581_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/framework-3404581_640.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2',
          },
          {
            itemImageSrc:
              '../../assets/images/realizations/building-1510561_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/building-1510561_640.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3',
          },
          {
            itemImageSrc:
              '../../assets/images/realizations/tools-864983_1280.jpg',
            thumbnailImageSrc:
              '../../assets/images/realizations/tools-864983_640.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4',
          },
        ],
      },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
      //   alt: 'Description for Image 5',
      //   title: 'Title 5',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
      //   alt: 'Description for Image 6',
      //   title: 'Title 6',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
      //   alt: 'Description for Image 7',
      //   title: 'Title 7',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
      //   alt: 'Description for Image 8',
      //   title: 'Title 8',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg',
      //   alt: 'Description for Image 9',
      //   title: 'Title 9',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
      //   alt: 'Description for Image 10',
      //   title: 'Title 10',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria11s.jpg',
      //   alt: 'Description for Image 11',
      //   title: 'Title 11',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria12s.jpg',
      //   alt: 'Description for Image 12',
      //   title: 'Title 12',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria13.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria13s.jpg',
      //   alt: 'Description for Image 13',
      //   title: 'Title 13',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria14.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria14s.jpg',
      //   alt: 'Description for Image 14',
      //   title: 'Title 14',
      // },
      // {
      //   itemImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria15.jpg',
      //   thumbnailImageSrc:
      //     'https://primefaces.org/cdn/primeng/images/galleria/galleria15s.jpg',
      //   alt: 'Description for Image 15',
      //   title: 'Title 15',
      // },
    ];
  }

  getItems() {
    return Promise.resolve(this.getData());
  }
}
