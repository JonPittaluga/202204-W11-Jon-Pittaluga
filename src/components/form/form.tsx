import React from 'react';
import { SyntheticEvent, useState } from 'react';
import { iGentleman } from '../../models/gentleman-interface';
import { apiAddGentleman } from '../../services/data-api';
import './form.css';

// TODO:
// - Revisar bien cómo es el form y la creación.
// - Repasar los apuntes.
// - Hacer que funcione correctamente
// - Entender cómo hacerlo funcionar

export function Form({
  handleAddGentleman,
  countGentlemen,
}: {
  handleAddGentleman(gentleman: iGentleman): void;
  countGentlemen: number;
}) {
  const initialState: Partial<iGentleman> = {
    name: '',
    picture: '',
    alternativeText: '',
    profession: '',
    status: '',
    twitter: '',
    isSelected: false,
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    handleAddGentleman({
      // id: countGentlemen + 2,
      name: formState.name as string,
      picture: formState.picture as string,
      alternativeText: formState.alternativeText as string,
      profession: formState.profession as string,
      status: formState.status as string,
      twitter: formState.twitter as string,
      isSelected: false,
    });
    setFormState(initialState);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const element = ev.target as HTMLFormElement;
    setFormState({ ...formState, [element.name]: element.value });
  };

  return (
    <>
      <div className="header-form">
        <h2>Create a new gentleman</h2>
        <p>Fill this form to create a new gentleman</p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Add a name for your gentleman"
            value={formState.name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="picture">Picture</label>
          <input
            type="text"
            name="picture"
            placeholder="Add a valid route"
            value={formState.picture}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="alternativeText">Alternative text</label>
          <input
            type="text"
            name="alternativeText"
            placeholder="Add an alternative text"
            value={formState.alternativeText}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            name="profession"
            placeholder="Add a profession, if any"
            value={formState.profession}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            name="status"
            placeholder="Add a status. Whatever it is."
            value={formState.status}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="twitter">Twitter</label>
          <br />
          <input
            type="text"
            name="twitter"
            placeholder="Add a Twitter account"
            value={formState.twitter}
            onChange={handleChange}
          ></input>
        </div>
        <div className="button-container">
          <button className="button-form" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
}
