/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";

//var data = [{"title" : "BLOOOOOP!", "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
//    "Architecto ea est in necessitatibus optio temporibus voluptatem. Alias assumenda debitis dolore," +
//    "dolorem doloremque ducimus illum, iure laudantium, modi mollitia quas recusandae."}];
//
//
//
//var postTitle = React.createClass({
//  render: function() {
//    return (
//          <h2 className="postTitle">
//            {this.props.title} </h2>
//    );
//  }
//});
//
//var postBody = React.createClass({
//  render: function() {
//    return (
//        <div className="postBody">
//          {this.props.body} </div>
//    );
//  }
//});
//
//
//var postRow = React.createClass({
//  render: function() {
//    return (
//        <div className="post-row row">
//          <postTitle />
//          <postBody />
//        </div>
//    )}
//});

export default React.createClass ({
  render() {
    let { title, body, description } = this.props;
    return (
        <div className="postRow row">
          <h3>{title}</h3>
          <time>{date}</time>
        </div>
        //<postRow />
    );
  }
});