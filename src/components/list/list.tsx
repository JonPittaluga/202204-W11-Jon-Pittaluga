import React from 'react';
import { iGentleman } from '../../models/gentleman-interface';
import { Gentleman } from '../gentleman/gentleman';

export function List({
  gentlemenData,
  selectItem,
  deleteItem,
}: {
  gentlemenData: Array<any>;
  selectItem(gentlemanId: number): void;
  deleteItem(gentlemanId: number): void;
}) {
  return (
    <ul className="gentlemen">
      {gentlemenData.map((item: iGentleman) => (
        <Gentleman
          key={item.id}
          gentleman={item}
          selectItem={selectItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}
