import './App.css'
import Homepage from "./pages/homepage/homepage"
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import CoursePage from './pages/coursePage/coursePage';

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              // user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
              <Homepage />

            }
          </Route>
          <Route path="/course">
            <CoursePage />
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
