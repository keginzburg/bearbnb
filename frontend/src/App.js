import { Switch, Route } from 'react-router-dom';

import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Feed />
        </Route>
      </Switch>
    </>
  );
}

export default App;
