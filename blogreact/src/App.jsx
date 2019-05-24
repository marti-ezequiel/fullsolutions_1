import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 
import MainPage from './sections/MainPage';

export default class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <Route path="/" component={MainPage} />
      </Router>
    );
  }
}
