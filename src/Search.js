import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';

class Search extends Component{

    state = {
        books: [],
        results: []
    }

    componentWillReceiveProps(props){
        this.setState({books: props.books});
    }

    searchStore = (e) =>{
        e.preventDefault();
        const value = this.refs.searchTerm.value;
        ('searching', value);
        search(value).then((books)=>{
            ('my books', this.state.books);
            if(!!books){
                if(books.length>0){
                  const results = books.map((book) => {
                    const existingBook = this.state.books.find((b) => b.id === book.id)
                    book.shelf = !!existingBook ? existingBook.shelf : 'none'
                    return book
                  });
                  ('results', results);
                  this.setState({ results })
                }  
              }
        });
    }

    handleChange(event, book){
        ('changing');
        this.props.changeShelf(book, event.target.value, true);
      }

    render(){
        ('rendering search');
        ('my books?', this.state.results);
        let foundBooks;
        if(this.state.results.length > 0){
            foundBooks = this.state.results.map((book)=> {
                ('*************************************');
                (book);
                ('*************************************');
                return (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : 'https://cataas.com/cat'})` }}></div>
                            <div className="book-shelf-changer">
                            <form>
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
                );
            })
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
                <form onKeyUp={this.searchStore}>
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
