import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import { iMenuOptions } from '../../models/gentleman-interface';

export function Header({
  title,
  menuOptions,
}: {
  title: string;
  menuOptions: Array<iMenuOptions>;
}) {
  return (
    <>
      <div className="main-header">
        <Link to="" className="main-title">
          {title}
        </Link>
        <Menu menuOptions={menuOptions} />
      </div>
    </>
  );
}
