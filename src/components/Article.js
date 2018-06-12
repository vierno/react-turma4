import React from "react";


const Header = props => {
  return (
    <header className="header">
      {props.children}
    </header>
  )
}

export default class Article extends React.Component {
  state = {
    body: "",
    title: "Carregando..."
  };
  componentDidMount = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}/`).then(
      response => {
        response.json().then(data => {
          this.setState({
            body: data.body,
            title: data.title
          });
        });
      }
    );
  };

  render() {
    const blocks = this.state.body.split("\n");
    return (
      <React.Fragment>
        <Header>
          <h1 className="title">{this.state.title}</h1>
        </Header>
        
        <article className="body">
          {blocks.map((block, i) => <p key={i}>{block}</p>)}
        </article>
      </React.Fragment>
    );
  }
}
