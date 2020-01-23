import React from 'react';
import Navbar from "./components/navbar";
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";


function Games() {
    return (
        <div>
            <Navbar>
            </Navbar>
            {/*TO DO*/}
        </div>
    );
}

function Scores() {
    return (
        <div>
            <Navbar>
            </Navbar>
            {/*TO DO*/}
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
      </BrowserRouter>
  );
}


export default App;
