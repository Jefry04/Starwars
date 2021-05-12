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
        <div>
          <NavBar />
          <Switch>
            <Route path="/People" component={People} />
            <Route path="/Planets" component={Planets} />
            <Route path="/ships" component={Ships} />
            <Route path="/vehicles" component={Vehicles} />
            <Route exact path="/result" component={SearchResult} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
