import React, { useEffect, useState, Fragment } from "react";
import { getStoryID, getStory } from "../services/hnApi";
import SingleStory from "../components/SingleStory";
import { CardColumns, Jumbotron } from "reactstrap";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const StoriesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyID, setStoryID] = useState([]); //se inicializa vacio

  useEffect(() => {
    getStoryID().then(data => setStoryID(data));
  }, []);

  return (
    <Jumbotron className="jumbo">
      {/* slice(0, count) es lo que have que se muestren de a 30 historias a la vez  */}
      <CardColumns>
        {storyID.slice(0, count).map(story => (
          <SingleStory story={story} key={story} />
        ))}
      </CardColumns>
    </Jumbotron>
  );
};

export default StoriesContainer;
