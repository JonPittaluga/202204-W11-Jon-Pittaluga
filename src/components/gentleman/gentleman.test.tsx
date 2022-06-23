import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Gentleman } from './gentleman';
import { iGentleman } from '../../models/gentleman-interface';

describe('Given the component Gentleman', () => {
  describe('When the component instance is created', () => {
    test('Then it should include list element with a gentleman class, a div ', () => {
      const gentlemanCard: iGentleman = {
        id: 1,
        name: 'The name',
        status: 'The status',
        profession: 'The profession',
        twitter: '@thetwitteraccount',
        picture: '/img/theroute.jpg',
        alternativeText: 'The alt text',
        isSelected: false,
      };
      const selectItemMock = jest.fn();
      const deleteItemMock = jest.fn();

      render(
        <Gentleman
          gentleman={gentlemanCard}
          selectItem={selectItemMock}
          deleteItem={deleteItemMock}
        />
      );

      const element = screen.getAllByRole('listitem')[0];
      expect(element).toHaveAttribute(
        'class',
        expect.stringMatching('gentleman')
      );
    });
    test('Then it should include an image with alt text of "The alt text", a "gentleman__avatar" class and a src "/img/theroute.jpg"', () => {
      const gentlemanCard: iGentleman = {
        id: 1,
        name: 'The name',
        status: 'The status',
        profession: 'The profession',
        twitter: '@thetwitteraccount',
        picture: '/img/theroute.jpg',
        alternativeText: 'The alt text',
        isSelected: false,
      };
      const selectItemMock = jest.fn();
      const deleteItemMock = jest.fn();

      render(
        <Gentleman
          gentleman={gentlemanCard}
          selectItem={selectItemMock}
          deleteItem={deleteItemMock}
        />
      );

      const element = screen.getAllByRole('img')[0];
      expect(element).toHaveAttribute(
        'alt',
        expect.stringMatching('The alt text')
      );
      expect(element).toHaveAttribute(
        'class',
        expect.stringMatching('gentleman__avatar')
      );
      expect(element).toHaveAttribute(
        'src',
        expect.stringMatching('/img/theroute.jpg')
      );
    });
    test('Then it should have an h2 with "The name" text', () => {
      const gentlemanCard: iGentleman = {
        id: 1,
        name: 'The name',
        status: 'The status',
        profession: 'The profession',
        twitter: '@thetwitteraccount',
        picture: '/img/theroute.jpg',
        alternativeText: 'The alt text',
        isSelected: false,
      };
      const selectItemMock = jest.fn();
      const deleteItemMock = jest.fn();

      render(
        <Gentleman
          gentleman={gentlemanCard}
          selectItem={selectItemMock}
          deleteItem={deleteItemMock}
        />
      );
      const element = screen.getAllByRole('heading', { level: 2 })[0];
      expect(element).toHaveTextContent('The name');
    });
    test('Then it should include an unordered list with a class of "gentleman__data-list" and three child elements', () => {
      const gentlemanCard: iGentleman = {
        id: 1,
        name: 'The name',
        status: 'The status',
        profession: 'The profession',
        twitter: '@thetwitteraccount',
        picture: '/img/theroute.jpg',
        alternativeText: 'The alt text',
        isSelected: false,
      };
      const selectItemMock = jest.fn();
      const deleteItemMock = jest.fn();
      render(
        <Gentleman
          gentleman={gentlemanCard}
          selectItem={selectItemMock}
          deleteItem={deleteItemMock}
        />
      );
      const element = screen.getAllByRole('list')[0];
      expect(element).toHaveClass('gentleman__data-list');
      const { getAllByRole } = within(element);
      const items = getAllByRole('listitem');
      expect(items.length).toBe(3);
      expect(items[0]).toHaveAttribute(
        'class',
        expect.stringMatching('gentleman__data')
      );
      expect(items[0]).toHaveTextContent('The profession');
      expect(items[1]).toHaveTextContent('The status');
      expect(items[2]).toHaveTextContent('@thetwitteraccount');
    });
    test('Then it should have two icons', () => {
      const gentlemanCard: iGentleman = {
        id: 1,
        name: 'The name',
        status: 'The status',
        profession: 'The profession',
        twitter: '@thetwitteraccount',
        picture: '/img/theroute.jpg',
        alternativeText: 'The alt text',
        isSelected: false,
      };
      const selectItemMock = jest.fn();
      const deleteItemMock = jest.fn();

      render(
        <Gentleman
          gentleman={gentlemanCard}
          selectItem={selectItemMock}
          deleteItem={deleteItemMock}
        />
      );
      const elementOne = screen.getByTitle('check-icon');
      const elementTwo = screen.getByTitle('delete-icon');
      expect(elementOne).toHaveClass('fa-check');
      expect(elementTwo).toHaveClass('gentleman__icon--delete');
    });
  });
  describe('When the user selects the gentleman and selected is true', () => {
    test('Then it has a class attribute of "selected"', () => {
      const gentlemanCard: iGentleman = {
        id: 1,
        name: 'The name',
        status: 'The status',
        profession: 'The profession',
        twitter: '@thetwitteraccount',
        picture: '/img/theroute.jpg',
        alternativeText: 'The alt text',
        isSelected: true,
      };
      const selectItemMock = jest.fn();
      const deleteItemMock = jest.fn();

      render(
        <Gentleman
          gentleman={gentlemanCard}
          selectItem={selectItemMock}
          deleteItem={deleteItemMock}
        />
      );
      const element = screen.getAllByRole('listitem')[0];
      expect(element).toHaveAttribute(
        'class',
        expect.stringMatching('gentleman selected')
      );
    });
  });
});
