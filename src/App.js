import { Routes, Route } from "react-router-dom";
import { appRoutes } from "routes";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/scss/general.scss';

import BaseContainer from "containers/BaseContainer";
import Page404 from 'errors/Page404';

const App = () => {
  return (
    <BaseContainer>
      <Routes>
        {appRoutes.map((route, index) => <Route {...route} key={index} />)}
          <Route path='*' element={<Page404 />} />
      </Routes>
    </BaseContainer>
  );
}

export default App;