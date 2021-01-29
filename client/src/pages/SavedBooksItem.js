import React, { Component } from "react";


class SavedBooksItem extends Component {
    render() {
        const { id, title, authors, description, image, link, deleteBook } = this.props;
        return (
            <div className="SavedBooksItem">
                        <p>{title}</p>
                        <p>{authors}</p>
                        <p>{description}</p>
                        <img src={image} alt={title} />
                        <a href={link}>More Info</a>
                        <button onClick={ () => deleteBook(id) }>Delete</button>
            </div>
        );
    }
}


export default SavedBooksItem;