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
      console.log("all books", this.state.books);
    })
  }

  changeShelf = (book, shelf, search)=>{
    BooksAPI.update(book, shelf);
    console.log("search", search);
    if(search){
      let newBook = true;
      for(let i = 0; i < this.state.books.length; i++){
        if(this.state.books[i].id === book.id)
          newBook = false;
      }
      console.log("newbooks", newBook);
      if(newBook){
        console.log("new bookS", this.state.books);
        console.log("adding books");
        this.state.books.push(book);
        console.log("new bookS", this.state.books);
      }
    }
    const books = this.state.books.map((b)=>{
      if(b.id === book.id){
        b.shelf = shelf;
      }
      return b;
    });
    this.setState({books});
    console.log(this.state.books);
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
