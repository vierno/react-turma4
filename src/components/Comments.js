import React from "react";
import SingleComment from "./SingleComment"

export default class Comments extends React.Component {
  render() {
    return (
      <section className="comments">
        <h2>Comentários</h2>
        <SingleComment user="João" body="lorem ipsum" />
        <SingleComment user="Maria" body="bla lalala" />
      </section>
    );
  }
}
