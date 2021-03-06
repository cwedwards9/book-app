import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookSearchForm from "./pages/BookSearchForm";
import SavedBooksList from "./pages/SavedBooksList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" render= { () => <BookSearchForm /> } />
          <Route exact path="/books" render= { () => <SavedBooksList /> } />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
