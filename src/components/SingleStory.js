import React, { Fragment, useState, useEffect } from "react";
import { getStory } from "../services/hnApi";

const SingleStory = ({ story }) => {
  const [newStory, setNewStory] = useState({});

  useEffect(() => {
    //cuando monta el componente, busca la historia con id, luego recibe los resultados en data y la setea en data
    getStory(story).then(data => data && data.url && setNewStory(data));
  }, []);

  return newStory && newStory.url ? (
    <Fragment>
      <h2>
        <a href={newStory.url}>{newStory.title}</a>
      </h2>
      <p>{newStory.by}</p>
      <p> Posted by: {newStory.time}</p>
    </Fragment>
  ) : null;
};

export default SingleStory;
