import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Given the component Button', () => {
  describe('When the component is rendered', () => {
    test('Then it should have a button element', () => {
      const selectAllMock = jest.fn();
      const areAllSelected: boolean = true;
      render(
        <Button
          selectAll={selectAllMock}
          areAllSelected={areAllSelected}
        ></Button>
      );
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });
  describe('When the argument areAllSelected is false', () => {
    test('It should render Select All', () => {
      const selectAllMock = jest.fn();
      const areAllSelected: boolean = false;
      render(
        <Button
          selectAll={selectAllMock}
          areAllSelected={areAllSelected}
        ></Button>
      );
      const buttonText = screen.getByText(/Select all/i);
      expect(buttonText).toBeInTheDocument();
    });
  });
  describe('When the argument areAllSelected is true', () => {
    test('It should render Unselect All', () => {
      const selectAllMock = jest.fn();
      const areAllSelected: boolean = true;
      render(
        <Button
          selectAll={selectAllMock}
          areAllSelected={areAllSelected}
        ></Button>
      );
      const buttonText = screen.getByText(/unselect all/i);
      expect(buttonText).toBeInTheDocument();
    });
  });
  describe('When the user clicks the button', () => {
    test('The propFunction function is called', () => {
      const selectAllMock = jest.fn();
      const areAllSelected: boolean = true;
      render(
        <Button
          selectAll={selectAllMock}
          areAllSelected={areAllSelected}
        ></Button>
      );
      const button = screen.getByRole('button');
      userEvent.click(button);
      expect(selectAllMock).toHaveBeenCalled();
    });
  });
});
