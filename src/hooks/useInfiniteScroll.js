import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants/index";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  //paso toda la funcion dentro del debounce para darle un timeout
  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
  }, 100); //timeout para que no haga load inmediato de las noticias

  useEffect(() => {
    //tiene 2 listeners:
    if (!loading) return;

    //si llega a 500, no va a seguir mostrando historias, caso contrario, cada vez que llegue abajo va a sumar 30
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]); //va a aplicar el efecto solo cuando este se dispare

  //este va a correr una sola vez, va a ser equivalente a un componentDidMount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //cleanup para remover el efecto:
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
