import React, { Component } from "react";
import SavedBooksItem from "./SavedBooksItem";
import { API } from "../utils/API";

class SavedBooks extends Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        API.returnBooks()
            .then(books => {
                this.setState({ books: books.data });
            });
    }
    handleDelete(id) {
        API.deleteBook(id)
            .then(() => {
                this.setState({
                    books: this.state.books.filter(c => c._id !== id)
                });
            });
    }
    render() {
        return (
            <div className="SavedBooks">
                {this.state.books.map(book => (
                    <SavedBooksItem 
                        key={book._id}
                        id={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        deleteBook={this.handleDelete}
                    />
                ))}
            </div>
        )
    }
}


export default SavedBooks;