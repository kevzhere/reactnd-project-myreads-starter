import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MyBooks extends Component{

  state= {
    books: []
  }

  componentWillReceiveProps(props){
    this.setState({books: props.books});
  }

  handleChange(event, book){
    this.props.changeShelf(book, event.target.value);
  
  }

  render(){
    const currentlyReading = this.props.books.filter((book)=>(book.shelf === "currentlyReading")).map((book)=>(
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf}  onChange={(e)=>this.handleChange(e, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    ));

    const wantToRead = this.props.books.filter((book)=>(book.shelf === "wantToRead")).map((book)=>(
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf}  onChange={(e)=>this.handleChange(e, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    ));

    const read = this.props.books.filter((book)=>(book.shelf === "read")).map((book)=>(
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf}  onChange={(e)=>this.handleChange(e, book)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    ));

    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>My Books</h1>
            <Link to="/" className="myLinks">All Books</Link>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {currentlyReading}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {wantToRead}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {read}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/Search">Add a book</Link>
          </div>
        </div>
);
}
}

export default MyBooks;