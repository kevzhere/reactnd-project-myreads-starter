import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import Main from './Main.js';
import Search from './Search.js';
import MyBooks from './MyBooks';

class BooksApp extends React.Component {

  state={
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((val)=>{
      this.setState({books: val})
    })
  }

  changeShelf = (book, shelf, search)=>{
    BooksAPI.update(book, shelf);
    if(search){
      let newBook = true;
      for(let i = 0; i < this.state.books.length; i++){
        if(this.state.books[i].id === book.id)
          newBook = false;
      }
      if(newBook){
        this.state.books.push(book);
      }
    }
    const books = this.state.books.map((b)=>{
      if(b.id === book.id){
        b.shelf = shelf;
      }
      return b;
    });
    this.setState({books});
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={()=>(
        <Main
          books = {this.state.books}
          changeShelf={this.changeShelf}
        />)}/>
        <Route path="/Search" render={()=>(
          <Search
          changeShelf={this.changeShelf}
          />
        )}
        />
        <Route path="/MyBooks" render={()=>(
          <MyBooks
          books={this.state.books}
          changeShelf={this.changeShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
