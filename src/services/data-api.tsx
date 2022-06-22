import { iGentleman } from '../models/gentleman-interface';
import { gentlemenData } from '../data/data-mock';

const url = 'http://localhost:3521/gentlemen';

export const apiGetGentlemen = (): Promise<Array<iGentleman>> => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch(() => gentlemenData);
};

export function apiUpdateGentleman(gentleman: iGentleman): Promise<iGentleman> {
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(gentleman),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((resp) => resp.json())
    .catch(() => gentlemenData);
}

export function apiDeleteGentleman(id: iGentleman['id']) {
  return fetch(url + `/${id}`, { method: 'DELETE' })
    .then((resp) => resp.json())
    .catch(() => gentlemenData);
}
