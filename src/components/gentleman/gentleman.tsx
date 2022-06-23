import React from 'react';
import { iGentleman } from '../../models/gentleman-interface';

export function Gentleman({
  gentleman,
  selectItem,
  deleteItem,
}: {
  gentleman: iGentleman;
  selectItem(gentlemanId: number): void;
  deleteItem(gentlemanId: number): void;
}) {
  return (
    <li className={'gentleman' + (gentleman.isSelected ? ' selected' : '')}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={gentleman.picture} // alt="The Fary pointing at you"
          alt={gentleman.alternativeText}
        />
        <span className="gentleman__initial">{gentleman.name[0]}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {gentleman.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span>{' '}
            {gentleman.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{' '}
            {gentleman.twitter}
          </li>
        </ul>
      </div>
      <i
        className="icon gentleman__icon fas fa-check"
        onClick={() => selectItem(gentleman.id as number)}
        title="check-icon"
      ></i>
      <i
        className="icon gentleman__icon gentleman__icon--delete fas fa-times"
        onClick={() => deleteItem(gentleman.id as number)}
        title="delete-icon"
      ></i>
    </li>
  );
}
