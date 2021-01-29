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
        const { title, authors, description, imageLinks, infoLink } = this.props.info;
        return (
            <main className="BookSearchResults">
                <section className="BookSearchResults-Title">
                    <div>
                        <p>{title}</p>
                        <p>{authors}</p>
                    </div>
                    <div>
                        <a href={infoLink}>More Info</a>
                        <button onClick={this.handleSave}>Save</button>
                    </div>
                </section>

                <section className="BookSearchResults-Description">
                    <img src={imageLinks.thumbnail} alt={title}/>
                    <p>{description}</p>
                </section>
            </main>
        )
    }
}


export default BookSearchResults;