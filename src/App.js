import { Routes, Route } from "react-router-dom";
import { appRoutes } from "routes";
import 'assets/scss/general.scss';

const App = () => {
  return (
    <Routes>
      {appRoutes.map((route, index) => <Route {...route} key={index} />)}
    </Routes>
  );
}

export default App;