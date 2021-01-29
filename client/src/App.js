import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookSearchForm from "./pages/BookSearchForm";
import SavedBooks from "./pages/SavedBooks";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/" render= { () => <BookSearchForm /> } />
          <Route exact path="/books" render= { () => <SavedBooks /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
