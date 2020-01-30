import React from 'react';
import RoutesComponent from './RoutesComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/style.css';
import GameList from "./components/GameList";
import Navbar from "./components/navbar";
import './styles/scores.css';
import Score from './components/Score';
import Scoreapp from "./components/Scoreapp";


function App() {
  return (
      <Router>
        <RoutesComponent/>
          {/*<Navbar />*/}
          {/*<GameList />*/}
          <Score />
          {/*<Scoreapp/>*/}

      </Router>
  );
}


export default App;
