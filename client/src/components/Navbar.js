import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <a href="/" className="app-name">Book Search App</a>
                <NavLink exact className="link" activeClassName="active-link" to="/">Search Book</NavLink>
                <NavLink exact className="link" activeClassName="active-link" to="/books">Saved Books</NavLink>
            </nav>
        );
    }
}


export default Navbar;