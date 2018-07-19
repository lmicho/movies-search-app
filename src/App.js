import React, { Component } from 'react';
import logo from './img/imdb-logo.png';
import search from './img/search-icon.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">IMDb Search</h1>
        </header>

        <section className="search-box">
          <input type="text" placeholder="Search..." />
          <button><img src={search} className="app-search" alt="search"/></button>
        </section>
       
      </div>
    );
  }
}

export default App;
