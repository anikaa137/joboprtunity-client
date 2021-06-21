import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import PrivateRoute from "./componantes/LogInComponent/ShareComponent/Login/PrivateRoute"
import GetStart from './componantes/GetStart/GetStart'
import Welcome from './componantes/Welcome/Welcome'
import Login from "./componantes/LogInComponent/ShareComponent/Login/Login"
import Home from "./componantes/HomeComponents/Home/Home"
import Payment from './componantes/LogInComponent/EmployLoginComponent/Payment/Payment'
import Addpost from "./componantes/EmployComponents/AddPost/Addpost";
import JobList from "./componantes/HomeComponents/JobList/JobList";
import EmployPaymentCard from "./componantes/LogInComponent/EmployLoginComponent/EmployPaymentCard/EmployPaymentCard";
import EmployForm from "./componantes/LogInComponent/EmployLoginComponent/EmployForm/EmployForm";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route exact path="/">
            <GetStart/>
            </Route>
            <Route  path="/welcome">
            <Welcome/>
            </Route>
            <PrivateRoute path="/home">
           <Home/>
          </PrivateRoute>
          <Route path="/add_post">
          <Addpost/>
          </Route>
          <Route path="/job_list">
         <JobList/>
            </Route>
          <Route path="/EmployLogin">
           <EmployPaymentCard/>
            </Route>
            <Route path="/employ_form">
          <EmployForm/>
            </Route>
            <Route path="/payment">
           <Payment/>
            </Route>
            <Route  path="/login">
             <Login/>
            </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
