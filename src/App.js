import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header';
import Main from './Components/Main';

import ThemeContext from './Contexts/ThemeContext';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = { theme : ""}
  }

  changeMode =() => {

    this.setState((state) => {
      return (state.theme !== "dark")? {theme:"dark"}: {theme:""}
    })
  }

  render() {
    return (
      <ThemeContext.Provider value = {{theme: this.state.theme, changeMode: this.changeMode}}>
        <div className='App'>
        <Header/>
        <Main />
      </div>
      </ThemeContext.Provider>
    );
  }
}

export default App

