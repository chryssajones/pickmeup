// This is where the magic happens!

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import * as firebase from "firebase";

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBJcYs45LZkQlnwei7iSadVqcq-gNbUYT4",
  //   authDomain: "pick-me-up-1515730524624.firebaseapp.com",
  //   databaseURL: "https://pick-me-up-1515730524624.firebaseio.com",
  //   projectId: "pick-me-up-1515730524624",
  //   storageBucket: "pick-me-up-1515730524624.appspot.com",
  //   messagingSenderId: "1044622095281"
  // };
  // firebase.initializeApp(config);


export default class extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
