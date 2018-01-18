// This is where the magic happens!

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/map.js';
import * as firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBJcYs45LZkQlnwei7iSadVqcq-gNbUYT4",
    authDomain: "pick-me-up-1515730524624.firebaseapp.com",
    databaseURL: "https://pick-me-up-1515730524624.firebaseio.com",
    projectId: "pick-me-up-1515730524624",
    storageBucket: "pick-me-up-1515730524624.appspot.com",
    messagingSenderId: "1044622095281"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pick Me Up!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
