import React from 'react';
import logo from './logo.svg';
import Navbar from "./components/navbar";
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";


function About() {
    return (
        <div>
            <Navbar>
            </Navbar>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <Navbar>
            </Navbar>
            <h2>Dashboard</h2>
        </div>
    );
}

function App() {
  return (
        <BrowserRouter>

        <Switch>
            <Route path="/">
                <About />
            </Route>
            <Route path="/scores">
                <Dashboard />
            </Route>
        </Switch>
      </BrowserRouter>
  );
}


export default App;
