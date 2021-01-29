import React, { Component } from "react";

class BookSearchForm extends Component {
    render() {
        return (
            <div className="BookSearchForm">
                <h1>Search For a Book</h1>
                <form>
                    <input
                        type="text"
                        name="search"
                        value=""
                    />
                </form>
            </div>
        )
    }
}


export default BookSearchForm;
