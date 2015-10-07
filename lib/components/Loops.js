import React from "react";
import {Link} from "react-router";


export default React.createClass({
  getInitialState: function() {
    return {data: [{img: "https://i.imgur.com/8klNsJq.jpg", comment: "Loading from reddit"}]};
  },

  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({data: data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadCommentsFromServer();
  },

  render() {
    //var testUrl = https://www.reddit.com/r/perfectloops.json

    return (
      <div className="row">
        <h1>L8PS</h1>
        <Link className="row" to="/">Main Page</Link>
        <div className="row">
          <ul className="small-block-grid-4">
            <li>
              <img src="https://i.imgur.com/8klNsJq.jpg"/>
              <span>{this.props.data}</span>
            </li>
              </ul>
        </div>
      </div>
  )}
});

