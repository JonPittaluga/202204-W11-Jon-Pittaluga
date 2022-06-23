import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import { iGentleman, iMenuOptions } from '../../models/gentleman-interface';
import { Layout } from '../layout/layout';
import { Info } from '../info/info';
import { Button } from '../button/button';
import { List } from '../list/list';
import { Form } from '../form/form';

// Data from api
import {
  apiDeleteGentleman,
  apiGetGentlemen,
  apiUpdateGentleman,
} from '../../services/data-api';

function App() {
  // Static variables
  const title: string = 'The pointing gentlemen';

  const menuOptions: Array<iMenuOptions> = [
    {
      label: 'create',
      path: 'create-gentleman',
    },
  ];

  const intialState: Array<iGentleman> = [];

  // State
  const [gentlemenDataState, setGentlemenData] = useState(intialState);

  const countSelectedGentlemen = gentlemenDataState.filter(
    (gentleman) => gentleman.isSelected
  );

  const countGentlemen: number = gentlemenDataState.length;

  const areAllSelected = gentlemenDataState.every(
    (gentleman) => gentleman.isSelected
  );

  // Fetch data from the server or the backup static file ../data/data-mock.ts
  useEffect(() => {
    apiGetGentlemen().then((data) => {
      setGentlemenData(data);
    });
  }, []);

  // Props functions
  const selectAll = (isSelected: boolean): void => {
    setGentlemenData(
      gentlemenDataState.map((item) => ({ ...item, isSelected: isSelected }))
    );
  };

  const selectItem = (gentlemanId: number): void => {
    apiUpdateGentleman(gentlemenDataState[gentlemanId]).then((resp) => {
      setGentlemenData(
        gentlemenDataState.map((item) =>
          item.id === gentlemanId
            ? { ...item, isSelected: !item.isSelected }
            : item
        )
      );
    });
  };

  const deleteItem = (gentlemanId: number) => {
    apiDeleteGentleman(gentlemanId).then((resp) => {
      setGentlemenData(
        gentlemenDataState.filter((item) => item.id !== gentlemanId && item)
      );
    });
  };
  const addGentleman = (gentleman: iGentleman) => {
    //     apiAddGentleman(gentleman).then((resp) => {
    //       setGentlemenData(
    // //        gentlemenDataState.filter((item) => item.id !== gentlemanId && item)
    //       );
    //     });
  };

  return (
    <div className="App">
      <Layout title={title} menuOptions={menuOptions}>
        {
          <>
            <Routes>
              <Route
                path="/"
                element={
                  // If there're gentlemen
                  gentlemenDataState.length > 0 ? (
                    <>
                      <main className="main container">
                        <section className="controls">
                          <Info count={countSelectedGentlemen.length} />
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
                  ) : (
                    // If there're no gentlemen
                    <div className="no-gentlemen">
                      <h1>Oh-my-gosh!</h1>
                      <h2>
                        There's no gentleman to be shown. <br />
                        You can create a new gentleman. Click on create and fill
                        the form.
                      </h2>
                    </div>
                  )
                }
              ></Route>
              <Route
                path="create-gentleman"
                element={<Form countGentlemen={countGentlemen} />}
              />
            </Routes>
          </>
        }
      </Layout>
    </div>
  );
}

export default App;
