import React from "react";

export default class Article extends React.Component {
  state = {
    body: "",
    title: "Carregando..."
  }
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/").then(response => {
      response.json().then(data => {
        console.log(data)
        this.setState({
          body: data.body,
          title: data.title
        })
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="title">{this.state.title}</h1>
        </header>
        <article className="body">
          {this.state.body}
        </article>
      </React.Fragment>
    );
  }
}