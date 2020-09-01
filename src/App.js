import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import EditPage from './components/edit-page';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/edit' component={EditPage} />
        </Router>
      </div>
    );
  }
};