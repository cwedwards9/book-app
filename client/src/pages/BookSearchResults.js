import React, { Component } from "react";

class BookSearchResults extends Component {
    render() {
        const { title, authors, description, imageLinks, infoLink } = this.props.info;
        return (
            <div className="BookSearchResults">
                <p>{title}</p>
                <p>{authors}</p>
                <p>{description}</p>
                <img src={imageLinks.thumbnail} alt={title}/>
                <a href={infoLink}>More Info</a>
            </div>
        )
    }
}


export default BookSearchResults;