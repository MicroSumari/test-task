import React from "react";
import RAndM from "../../modules/hero/RAndM";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  return (
    <RAndM.Main>
      <RAndM.Panel>
        <RAndM.Subtitle>We found nothing... :(</RAndM.Subtitle>
        <RAndM.Button onClick={() => history.push("/")}> Home </RAndM.Button>
      </RAndM.Panel>
    </RAndM.Main>
  );
};

export default PageNotFound;
