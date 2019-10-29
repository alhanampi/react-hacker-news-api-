import React, { Fragment, useState, useEffect, memo } from "react";
import { getStory } from "../services/hnApi";
import { Card, Button, CardText, CardBody, CardHeader } from "reactstrap";
import { Styles } from "../styles/Styles.css";
import { mapTime } from "../mappers/mapTime";

//memo va a recordar qué historias ya habían sido cargadas y no va a rerenderizarlas
const SingleStory = memo(function SingleStory({ story }) {
  const [newStory, setNewStory] = useState({});

  useEffect(() => {
    //cuando monta el componente, busca la historia con id, luego recibe los resultados en data y la setea en data
    getStory(story).then(data => data && data.url && setNewStory(data));
  }, []);

  return newStory && newStory.url ? (
    <Fragment>
      <Card className="card">
        <CardHeader tag="h4" className="title">
          {newStory.title}
        </CardHeader>
        <CardBody>
          <CardText>
            <b>Author:</b> {newStory.by}
          </CardText>
          <CardText>
            {" "}
            <b>Posted: </b>
            {mapTime(newStory.time)} ago{" "}
          </CardText>
          <Button className="button" block>
            <a className="links" href={newStory.url} target="_blank">
              Read More
            </a>
          </Button>
        </CardBody>
      </Card>
    </Fragment>
  ) : null;
}
)

export default SingleStory;