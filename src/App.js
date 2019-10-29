import React, {Fragment} from "react";
import StoriesContainer from "./containers/StoriesContainer";

export const App = () => {
  return(
    <Fragment>
      <h1>Hacker News</h1>
      <h2> Tech news and stories</h2>
      <StoriesContainer />

    </Fragment>
    )
};
