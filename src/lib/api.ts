import noticias from '../data/noticias.json';
import turismo from '../data/turismo.json';
import autoridades from '../data/authorities.json';

export const getNews = async () => {
  return noticias;
};

export const getPlaces = async () => {
  return turismo;
};

export const getAuthorities = async () => {
  return autoridades;
};
