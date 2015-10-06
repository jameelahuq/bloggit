/**
 * Created by HUQ on 10/6/15.
 */
import React from "react";
import AllPosts from "./AllPosts.js"
//import data from "../../data"


export default React.createClass({
  getInitialState() {
    return {posts: [], answer: 42};
  },

  componentDidMount() {
    //fetch("/data.json").then(response => {
    //  response.json().then(data => this.setState(data));
    //});

    var PostObject = Parse.Object.extend("PostObject");
    var query = new Parse.Query(PostObject);
    query.find({
      success: results => {
        this.setState({posts: results.map(po => po.attributes)
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    })
  },


  render() {
    return (
        <div>
          <h1>The BLOGGINATOR {this.state.answer} </h1>

        <AllPosts posts={this.state.posts}>
        </AllPosts>
      </div>
    );
  }
});


//export default class App extends React.Component {
//  render() {
//    let answer = 42;
//    return (
//        <div>
//          BLERK
//          {answer}
//        </div>
//    )
//  }
//};
