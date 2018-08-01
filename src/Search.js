import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';

class Search extends Component{

    state = {
        books: []
    }

    searchStore = (e) =>{
        e.preventDefault();
        console.log(this.refs.searchTerm.value);
        const value = this.refs.searchTerm.value;
        search(value).then((data)=>{
            this.setState({books: data});
            console.log(this.state.books);
        });
    }

    handleChange(event, book){
        console.log("handled");
        this.props.changeShelf(book, event.target.value, true);
      }

    render(){
        let foundBooks;
        console.log("whats books, ", this.state.books.length);
        if(this.state.books.length){
            foundBooks = this.state.books.map((book)=>(
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <form>
                            <select value={book.shelf ? book.shelf:"none"}  onChange={(e)=>this.handleChange(e, book)}>
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
        }

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form onSubmit={this.searchStore}>
                    <input type="text" ref="searchTerm" placeholder="Search by title or author"/>
                </form>

              </div>
            </div>
            <div className="search-books-results">
            <div className="bookshelf">
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                      {foundBooks}
                      </ol>
                    </div>
                  </div>
            </div>
          </div>
        );
    }
}

export default Search;
