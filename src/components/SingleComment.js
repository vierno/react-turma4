import React from "react";

export default class SingleComment extends React.Component {
  state = {
    open: true
  };
  handleButtonClick = () => {
    this.setState({
      open: !this.state.open
    });
  };
  renderComment = () => {
    if (this.state.open) {
      return (
        <React.Fragment>
          <p className="comment_user">{this.props.user}</p>
          <div className="comment_body">{this.props.body}</div>
        </React.Fragment>
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <div className="comment">
        {this.renderComment()}
        <button onClick={this.handleButtonClick}>Esconder comentário</button>
      </div>
    );
  }
}
