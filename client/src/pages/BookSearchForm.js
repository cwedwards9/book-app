import React, { Component } from "react";
import BookSearchResults from "./BookSearchResults";
import { API } from "../utils/API";

class BookSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { search: "", books: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();

        API.searchBooks(this.state.search)
            .then(books => {
                this.setState({ books: books.data });
            })
    }

    render() {
        return (
            <div className="BookSearchForm">
                <h1>Search For a Book</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="search"
                        value={this.state.search}
                        onChange={this.handleChange}
                    />
                    <button>Search</button>
                </form>

                {this.state.books.map(book => (
                    <BookSearchResults
                        key={book.id}
                        id={book.id}
                        info={book.volumeInfo}
                    />
                ))}

            </div>
        )
    }
}


export default BookSearchForm;
