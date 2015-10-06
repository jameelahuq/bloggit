/**
 * Created by HUQ on 10/6/15.
 */

/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";
import Post from "./Post";

export default React.createClass({
  render() {
    return (
        <div className="all-posts">
          {this.props.posts.map((post, i) => <Post key={i} {...post} />)}
        </div>
    );
  }
});




