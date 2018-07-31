import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Main from './Main.js';
import Search from './Search.js';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(<Main/>)}/>
        <Route path="/Search" render={()=>(
          <Search/>
        )}
        />
      </div>
    )
  }
}

export default BooksApp
