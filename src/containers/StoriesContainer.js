import React, { useEffect, useState, Fragment } from "react";
import { getStoryID, getStory } from "../services/hnApi";
import SingleStory from "../components/SingleStory";

const StoriesContainer = () => {
  const [storyID, setStoryID] = useState([]); //se inicializa vacio

  useEffect(() => {
    getStoryID().then(data => setStoryID(data));
    //storyID && storyID.length > 0 
   // getStory(21380922).then(data => console.log(data))
  }, []);

  return (
 storyID.map(story => (
   <SingleStory story={story} key={story} />
 ))
  );
};

export default StoriesContainer;
