//importo todas las cosas que quiero testear:
import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, waitForElement } from "@testing-library/react";
import { App } from "../App";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryID } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";

//limpiar el dom antes de hacer ningun testeo, es crucial hacer esto
beforeEach(cleanup);
//crear los mocks:
jest.mock("../hooks/useInfiniteScroll.js");
jest.mock("../services/hnApi", () => ({
  getStory: jest.fn(), //crear así la funcion permite hacer excepciones en la llamada
  getStoryID: jest.fn()
}));

test("render app", async () => {
  //testear esta funcion
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT
  }));
  //no toman en cuenta toda la funcion con axios, sino solamente el result, y lo testean
  getStory.mockImplementation(() => Promise.resolve(singularStory)); //singular es el objeto en fixtures
  getStoryID.mockImplementation(() => Promise.resolve(storyIds)); //storyIds es el array en fixtures

  //espera esta respuesta, renderiza la aplicacion
  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    //waitForElement permite pasar un elemento o array de elementos, y una vez que las acciones asíncronas pasan, hace algo
    await waitForElement(() => [
      expect(getByText("Título de prueba")).toBeTruthy(), //asegurarse que sea true
  
    ]);
  });
});
