import React, { Component } from "react";
import { API } from "../utils/API";
import "./BookSearch.css";

class BookSearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = { isSaved: false };
        this.handleSave = this.handleSave.bind(this);
    }
    handleSave() {
        const { title, authors, description, imageLinks, infoLink } = this.props.info;
        API.saveBook({
            title: title, 
            authors: authors, 
            description: description, 
            image: imageLinks.thumbnail, 
            link: infoLink
        });

        this.setState({ isSaved: !this.state.isSaved });
    }
    render() {
        const { title, authors, description, imageLinks, infoLink } = this.props.info;
        return (
            <section className="BookSearchResult">
                <div className="results-heading">
                    <div className="results-title">
                        <h2>{title}</h2>
                        {authors ? authors.map((author, index) => <p className="author" key={index}>{author} </p>) : <p>-</p>}
                    </div>
                    <div className="results-buttons">
                        {this.state.isSaved 
                            ? <button><i class="fas fa-check"></i> Saved</button> 
                            : <button onClick={this.handleSave}>Save</button> 
                        }
                        <a href={infoLink} target="_blank" rel="noreferrer">More Info</a>
                    </div>
                </div>
                <div className="results-body">
                    { imageLinks ? <img src={imageLinks.thumbnail} alt={title}/> : <p className="no-image">No Image</p> }
                    <p>{description}</p>
                </div>
            </section>
        );
    }
}


export default BookSearchResults;