import React from 'react';
import People from './components/People';
import Planets from './components/Planets';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ships from './components/Ships';
import Vehicles from './components/Vehicles';
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
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
