import React from 'react';
import { useState } from 'react';
import './App.css';
import { gentlemenData } from '../../data/data-mock';
import { Button } from '../button/button';
import { Info } from '../info/info';
import { List } from '../list/list';
import { iMenuOptions } from '../../models/gentleman-interface';
import { Link } from 'react-router-dom';
import { Router, Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/home';
import { Header } from '../header/header';
import { Layout } from '../layout/layout';

function App() {
  // Static variables
  const title: string = 'The pointing gentlemen';

  const menuOptions: Array<iMenuOptions> = [
    {
      label: 'create',
      path: 'create-gentleman',
    },
  ];

  // State
  const [gentlemenDataState, setGentlemenData] = useState(gentlemenData);

  const countSelectedGentlemen = gentlemenDataState.filter(
    (gentleman) => gentleman.selected
  );

  const areAllSelected = gentlemenDataState.every(
    (gentleman) => gentleman.selected
  );

  // Props functions
  const selectAll = (isSelected: boolean): void => {
    setGentlemenData(
      gentlemenDataState.map((item) => ({ ...item, selected: isSelected }))
    );
  };

  const selectItem = (gentlemanId: number): void => {
    setGentlemenData(
      gentlemenDataState.map((item) =>
        item.id === gentlemanId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const deleteItem = (gentlemanId: number) => {
    setGentlemenData(
      gentlemenDataState.filter((item) => item.id !== gentlemanId && item)
    );
  };

  // Render with conditions
  return (
    <div className="App">
      <Layout title={title} menuOptions={menuOptions}>
        {
          // If there're gentlemen
          gentlemenDataState.length > 0 ? (
            <>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <main className="main container">
                        <section className="controls">
                          <Info number={countSelectedGentlemen.length} />
                          <Button
                            selectAll={selectAll}
                            areAllSelected={areAllSelected}
                          />
                        </section>
                        <List
                          gentlemenData={gentlemenDataState}
                          selectItem={selectItem}
                          deleteItem={deleteItem}
                        />
                      </main>
                    </>
                  }
                ></Route>
                {/* <Route path="todo" element={<Form />} /> */}
              </Routes>
              {/* <Route path="about" element={<About />} /> */}
            </>
          ) : (
            // If there're no gentlemen
            <div className="no-gentlemen">
              <h1>Oh-my-gosh!</h1>
              <h2>
                There's no gentleman to be shown. <br />
                Reload the page or become yourself a pointing gentleman. <br />
                <br />
                Call ISDI Coders for detailed instructions!
              </h2>
            </div>
          )
        }
      </Layout>
    </div>
  );
}

export default App;
