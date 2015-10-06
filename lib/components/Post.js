import React from "react";

export default React.createClass({
  render() {
    let { title, body, date } = this.props;
    return (
      <div className="post">
        <h3>{title}</h3>
        <time>{date}</time>
        <p>{body}</p>
      </div>
    );
  }
});
