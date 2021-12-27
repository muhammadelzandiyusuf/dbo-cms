import { Routes, Route } from "react-router-dom";
import { appRoutes } from "routes";

const App = () => {
  return (
    <Routes>
      {appRoutes.map((route, index) => <Route {...route} key={index} />)}
    </Routes>
  );
}

export default App;