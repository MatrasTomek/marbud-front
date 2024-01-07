import { Injectable } from '@angular/core';

@Injectable()
export class OfferService {
  getData() {
    return [
      {
        icon: 'pi pi-thumbs-up-fill',
        title: 'Wsparcie',
        description: 'Przy wyborze projeku, technologii i materiałów',
      },
      {
        icon: 'pi pi-briefcase',
        title: 'Doradztwo',
        description: 'W kwestii zastosowania najnowszych rozwiązań',
      },
      {
        icon: 'pi pi-dollar',
        title: 'Gwarancję ceny',
        description:
          'Z nami nie grożą ci niespodzianki, od początku wiesz ile będzie kosztowała twoja inwestycja',
      },
      {
        icon: 'pi pi-calculator',
        title: 'Bezpłatna wycena',
        description:
          'Jeżeli masz już swój projekt indywidualny lub gotowy prześlij go do nas a my wycenimy',
      },
      {
        icon: 'pi pi-check-square',
        title: 'Gwarancje jakści',
        description:
          'Na każdą wykonaną przez naszą firmę prace udzielamy gwarancji nawet do 5 lat w zależności od jej charakteru',
      },
      {
        icon: 'pi pi-users',
        title: 'Wieloletnie doświadczenie',
        description: 'Nasza firma budową domów zajmuję się od pokoleń.',
      },
    ];
  }

  getItems() {
    return Promise.resolve(this.getData());
  }
}
