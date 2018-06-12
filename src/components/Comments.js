import React from "react";
import SingleComment from "./SingleComment";
import NewComment from "./NewComment";

export default class Comments extends React.Component {
  state = {
    comments: []
  };
  addComment = comment => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          name: comment.name,
          body: comment.body
        }
      ]
    });
  };
  render() {
    return (
      <section className="comments">
        <h2>Comentários</h2>
        <NewComment onNewComment={this.addComment} />
        {this.state.comments.map((comment, i) => {
          return <SingleComment user={comment.name} body={comment.body} />;
        })}
      </section>
    );
  }
}
