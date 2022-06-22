import React from 'react';
import { Link } from 'react-router-dom';
import { iMenuOptions } from '../../models/gentleman-interface';
import './menu.css';

export function Menu({ menuOptions }: { menuOptions: Array<iMenuOptions> }) {
  return (
    <>
      <nav className="menu">
        <ul>
          {menuOptions.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
