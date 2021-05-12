import React from 'react';
import People from './pages/People';
import Planets from './pages/Planets';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ships from './pages/Ships';
import Vehicles from './pages/Vehicles';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/people" component={People} />
          <Route exact path="/" component={People} />
          <Route path="/planets" component={Planets} />
          <Route path="/ships" component={Ships} />
          <Route path="/vehicles" component={Vehicles} />
          <Route exact path="/result" component={SearchResult} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
