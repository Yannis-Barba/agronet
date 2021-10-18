import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/home';
import AncienStage from './pages/ancienstage';
import OffreStage from './pages/offrestage';
import Evenements from './pages/evenements';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route path="/pages/ancienstage">
            <AncienStage/>
          </Route>
          <Route path="/pages/offrestage">
            <OffreStage/>
          </Route>
          <Route path="/pages/evenements">
            <Evenements/>
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
