import React from 'react';
import Navbar from "./components/navbar";
import './header.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";


function Games() {
    return (
        <div>
            {/*to do page*/}
        </div>
    );
}

function Scores() {
    return (
        <div>
            {/*to do page*/}
        </div>
    );
}

function App() {
  return (
        <BrowserRouter>
        <Switch>
            <Route path="/">
                <Games />
            </Route>
            <Route path="/scores">
                <Scores />
            </Route>
        </Switch>
            <Navbar></Navbar>
      </BrowserRouter>
  );
}


export default App;
