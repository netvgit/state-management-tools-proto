import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Users from './components/Users';
import Books from './components/Books';
import UsersBooks from './components/UsersBooks';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/users-books">Users Books</Link></li>
              </ul>
            </div>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/users" component={Users} />
              <Route path="/books" component={Books} />
              <Route path="/users-books" component={UsersBooks} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
