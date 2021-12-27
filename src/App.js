import { Routes, Route } from "react-router-dom";
import { appRoutes } from "routes";
import 'assets/scss/general.scss';

import BaseContainer from "containers/BaseContainer";

const App = () => {
  return (
    <BaseContainer>
      <Routes>
        {appRoutes.map((route, index) => <Route {...route} key={index} />)}
      </Routes>
    </BaseContainer>
  );
}

export default App;