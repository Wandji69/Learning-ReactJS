import React from "react";
import { Route, Switch } from 'react-router-dom'
import './App.css';

import Trainings from './pages/Trainings';
import Home from './pages/Home';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import SingleTrain from "./pages/SingleTrain";
import About from './pages/About';
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trainings/" component={Trainings} />
        <Route exact path="/trainings/:slug" component={SingleTrain} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
