# Week 11 - Challenge - Continuing over the previous one

- We start scaling the program - with TDD (or tests at least)
  - Add data persistence. Read it from a JSON server
  - We have tests and test fetch
  - Add option to create gentleman so we have all CRUD operations implemented

## Gentlemen pointing at you React

Create a React application from this mockup. Identify which data in the current HTML is dynamic and program it to feed from the provided array.

Use the following components: App, Info, Button, Gentleman

```js
[
  {
    id: 1,
    name: 'Bertin Osborne',
    status: 'Alive',
    profession: 'Youtuber',
    twitter: '@osbourne',
    picture: 'bertin.jpg',
    alternativeText: 'Osbourne pointing at you',
    selected: true,
  },
  {
    name: 'The Farytale',
    status: 'RIP',
    profession: 'Influencer',
    twitter: 'pending',
    picture: 'fary.jpg',
    alternativeText: 'The Fary pointing at you',
    id: 2,
    selected: false,
  },
  {
    id: 3,
    name: 'Julius Churchs',
    status: 'Alive',
    profession: 'Java developer',
    twitter: '@julius_churchs',
    picture: 'julio.jpg',
    alternativeText: 'Churchs pointing at you',
    selected: true,
  },
];
```
