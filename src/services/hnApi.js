import axios from "axios";
import {selectFields} from '../utils/selectFields'

//url de ejemplo: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty

export const baseURL = "https://hacker-news.firebaseio.com/v0/";
//paso la url base:
export const newStoriesUrl = `${baseURL}newstories.json`;
export const storyUrl = `${baseURL}item/`;

//tomar una historia en particular
export const getStory = async storyID => {
  const result = await axios
    .get(`${storyUrl + storyID}.json`)
    .then(({ data }) => data && selectFields(data)); //traer los campos que quiero mostrar, y chequear que existan

  return result;
};

//va a crear un side effect, así que requiere async/await
export const getStoryID = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data); //una vez que tiene el resultado, devuelve la data. Al desestructurar con {}, solo devuelve data y no el resto de la info

  return result;
};
