import React from "react";

const initialState = {
  name: "",
  body: ""
}

export default class NewComment extends React.Component {
  state = initialState;

  handleChange = field => {
    return event => {
      this.setState({
        [field]: event.target.value
      });
    };
  };

  handleSubmitClick = () => {
    this.props.onNewComment(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <div className="new_comment">
        <h3>Adicionar novo comentário</h3>
        <label htmlFor="name">Nome</label>
        <input
          value={this.state.name}
          onChange={this.handleChange("name")}
          type="text"
          id="name"
        />
        <label htmlFor="body">Comentário</label>
        <textarea
          onChange={this.handleChange("body")}
          name="body"
          id="body"
          value={this.state.body}
          className="comment_box"
        />
        <button onClick={this.handleSubmitClick}>Comentar</button>
      </div>
    );
  }
}
