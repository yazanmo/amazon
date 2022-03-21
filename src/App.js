import './App.css';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/Navigation';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
           
             <NavBar />
              <Switch>            
                <Route path="">
                    <MainPage />
                </Route>
              </Switch>
           
      </div>
    </Router>
  );
}

export default App;
