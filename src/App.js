import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path = '/home' component={Home}/>
          <Route exact path ='/' component={Home}/>
          <Route path ='/teams/details/:idTeam' component={TeamDetails}/>
          <Route path ='*' component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
