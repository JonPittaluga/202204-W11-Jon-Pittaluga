import { iGentleman } from '../models/gentleman-interface';

export const gentlemenData: Array<iGentleman> = [
  {
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: '/img/bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    isSelected: false,
  },
  {
    name: 'The Farytale',
    status: 'RIP',
    profession: 'Blandengue Hunter',
    twitter: 'pending',
    picture: '/img/fary.jpg',
    alternativeText: 'The Fary pointing at you',
    id: 2,
    isSelected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'King of Key Biscaine',
    twitter: '@julius_churchs',
    picture: '/img/julio.jpg',
    alternativeText: 'Churchs pointing at you',
    isSelected: false,
  },
];
