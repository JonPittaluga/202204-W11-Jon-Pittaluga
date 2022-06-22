import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';
import { iMenuOptions } from '../../models/gentleman-interface';

describe('Given the component Header', () => {
  describe('It has one div and two child components', () => {
    test('It has the title and the create button"', () => {
      const title: string = 'The pointing gentlemen';
      let menuOptions: Array<iMenuOptions> = [
        {
          label: 'create',
          path: 'create-gentleman',
        },
      ];

      const { getByText, queryAllByTestId } = render(
        <Router>
          <Header title={title} menuOptions={menuOptions} />
        </Router>
      );
    });

    describe('It takes you to two different components', () => {
      test('It should have this message: "1 gentleman pointing at you"', () => {});
    });
  });
});
