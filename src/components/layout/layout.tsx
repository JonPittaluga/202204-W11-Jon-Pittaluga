import React from 'react';
import { iMenuOptions } from '../../models/gentleman-interface';
import { Header } from '../header/header';

export function Layout({
  title,
  menuOptions,
  children,
}: {
  title: string;
  menuOptions: Array<iMenuOptions>;
  children: JSX.Element;
}) {
  return (
    <>
      <Header title={title} menuOptions={menuOptions} />
      {children}
    </>
  );
}
