import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

import Home from "./pages/home/home.jsx"
import './App.css'
import Login from "./pages/auth/login/login"
import Register from "./pages/auth/register/register"

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              // user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
              <Home />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
