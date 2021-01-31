import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <a href="/" className="app-name"><i className="fas fa-book"></i> Book Search App</a>
                <div>
                    <NavLink exact className="link" activeClassName="active-link" to="/"><i className="fas fa-search"></i> Search Book</NavLink>
                    <NavLink exact className="link" activeClassName="active-link" to="/books"><i className="far fa-bookmark"></i> Saved Books</NavLink>
                </div>
            </nav>
        );
    }
}


export default Navbar;