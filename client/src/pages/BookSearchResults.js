import React, { Component } from "react";
import { API } from "../utils/API";
import "./BookSearch.css";

class BookSearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "", authors: "", description: "", image: "", link: "" };
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave() {
        const { title, authors, description, imageLinks, infoLink } = this.props.info;
        this.setState({
            title: title, 
            authors: authors, 
            description: description, 
            image: imageLinks.thumbnail, 
            link: infoLink
        }, () => {
            API.saveBook(this.state);
        });
    }
    render() {
        const { title, authors, description, imageLinks, infoLink, publishedDate } = this.props.info;
        return (
            <section className="BookSearchResult">
                <div className="results-heading">
                    <div className="results-title">
                        <h2>{title}</h2>
                        {authors ? authors.map((author, index) => <p className="author" key={index}>{author} </p>) : <p>-</p>}
                    </div>
                    <div className="results-buttons">
                        <button onClick={this.handleSave}>Save</button>
                        <a href={infoLink}>More Info</a>
                    </div>
                </div>
                <div className="results-body">
                    { imageLinks ? <img src={imageLinks.thumbnail} alt={title}/> : <p className="no-image">No Image</p> }
                    <p>{description}</p>
                </div>
            </section>
        )
    }
}


export default BookSearchResults;