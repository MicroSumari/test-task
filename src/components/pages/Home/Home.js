import React from "react";
import SearchBoard from "../../modules/search-board/SearchBoard";
import {useConnectionState} from '../../environment/Client/provider'

const Home = () => {
  const serverStatus = useConnectionState();

  return (
    <React.Fragment>

  {serverStatus && <SearchBoard />}
    </React.Fragment>
  );
};

export default Home;
