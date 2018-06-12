import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Article from "./components/Article";
import Comments from "./components/Comments";

import { BrowserRouter, Route } from "react-router-dom";

class ArticlePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Article id={this.props.match.params.id} />
        <Comments />
      </React.Fragment>
    );
  }
}

const HomePage = props => {
  return (
    <div>auisodhfoiasudfh</div>
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
