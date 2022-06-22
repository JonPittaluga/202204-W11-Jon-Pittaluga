import React from 'react';
import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('Given the component Info', () => {
  describe('When the application starts', () => {
    test('It should have this message: "Select a gentleman, please"', () => {
      const count: number = 0;
      render(<Info count={count}></Info>);
      const element = screen.getByText('Select a gentleman, please');
      expect(element).toBeInTheDocument();
    });

    describe("When there's one element selected", () => {
      test('It should have this message: "1 gentleman pointing at you"', () => {
        const count: number = 1;
        render(<Info count={count}></Info>);
        const element = screen.getByText(/1 gentleman pointing at you/i);
        expect(element).toBeInTheDocument();
      });
    });

    describe('When there are three elements selected', () => {
      test('It should have this message: "3 gentlemen pointing at you"', () => {
        const count: number = 3;
        render(<Info count={count}></Info>);
        const element = screen.getByText(/3 gentlemen pointing at you/i);
        expect(element).toBeInTheDocument();
      });
    });
  });
});
