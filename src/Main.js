import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component{

    componentWillReceiveProps(props){
        this.setState({books: props.books});
      }
    
      handleChange(event, book){
        this.props.changeShelf(book, event.target.value);
      }


    render(){
        ('inside main');
        const allBooks = this.props.books.map((book)=>(
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <form onSubmit={this.handleSubmit}>
                        <select value={book.shelf}  onChange={(e)=>this.handleChange(e, book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </form>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        ));
        ('all books', allBooks);
        const newBooks = this.props.books.filter((book)=>(book.publishedDate.split("-")[0] > 2009)).map((book)=>(
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

        const popularBooks = this.props.books.filter((book)=>(book.averageRating > 3)).map((book)=>(
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
                <h1>All Books</h1>
                <Link to="/MyBooks" className="myLinks">My Books</Link>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">All Books</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {allBooks}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">New Books</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {newBooks}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Popular Books</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {popularBooks}
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

export default Main;