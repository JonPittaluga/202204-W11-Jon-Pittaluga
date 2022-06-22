import React from 'react';
import './button.css';
export function Button({
  selectAll,
  areAllSelected,
}: {
  selectAll(isSelected: boolean): void;
  areAllSelected: boolean;
}) {
  return (
    <button
      role="button"
      className="button button--select"
      onClick={() => selectAll(!areAllSelected)}
    >
      {areAllSelected ? 'Unselect all' : 'Select all'}
    </button>
  );
}
