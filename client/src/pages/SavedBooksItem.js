import React, { Component } from "react";
import "./SavedBooks.css";

class SavedBooksItem extends Component {
    render() {
        const { id, title, authors, description, image, link, deleteBook } = this.props;
        return (
            <section className="SavedBooksItem">
                <div className="saved-heading">
                    <div className="saved-title">
                        <h2>{title}</h2>
                        { authors.map((author, index) => <p className="author" key={index}>{author} </p>) }
                    </div>
                    <div className="saved-buttons">
                        <button onClick={ () => deleteBook(id) }>Remove</button>
                        <a href={link}>More Info</a>
                    </div>
                </div>
                <div className="saved-body">
                    <img src={image} alt={title} />
                    <p>{description}</p>
                </div>
            </section>
        );
    }
}


export default SavedBooksItem;