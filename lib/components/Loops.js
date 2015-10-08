import React from "react";
import {Link} from "react-router";



var data = [{url: "http://img.pandawhale.com/post-62718-Imgur-loading-gif-candidate-vo-OiXh.gif", comment: "loading from reddit..."}];


//
class Img extends React.Component {
  constructor(props) {
    //instead of getInitialState, for ES6 we....
    super(props);
    this.state = {loaded: false};
  }

  //to use, in the div, type style={this.style()}
  //style() {
  //  return{
  //    display: 'inline-block',
  //    width: 400
  //  }
  //},
  showIfLoaded() {
    return {
      display: (this.state.loaded ? 'inline-block' : 'none')
    }
  }

//
  hideIfLoaded() {
    return {
      display: (!this.state.loaded ? 'inline-block' : 'none')
    }
  }

  render() {
    console.log("src:", this.props);
    let {url} = this.props;
    return (
        <li>
          <img src={url} onLoad={() => this.setState({loaded: true})}
               style={this.showIfLoaded()}
              />
          <img src="http://img.pandawhale.com/post-62718-Imgur-loading-gif-candidate-vo-OiXh.gif"
               style={this.hideIfLoaded()}
              />
        </li>
    );
  }
}



// <span>{comment}</span>

var AllImgs = React.createClass({
  render: function() {
    console.log("allimgs:", this.props.data);
    return (
        <ul className="imgList small-block-grid-3">
          {this.props.data.map((img, i) => <Img key={i} url={img} /> )}
        </ul>
    )}
});

//{this.props.data.map((img, i) => <Img key={i} {...img} /> )}

export default React.createClass({
  getInitialState: function() {
    return {perfectLoops: ["http://img.pandawhale.com/post-62718-Imgur-loading-gif-candidate-vo-OiXh.gif"]};
  },

  componentDidMount: function() {
    fetch("https://www.reddit.com/r/perfectloops.json")
    .then(response => {
          response.json().then(data => {
            var perfectLoops = data.data.children.map(child => child.data.url)
            .filter(url => url.match(/\.(gif|jpg)$/))
            this.setState({perfectLoops: perfectLoops});
            console.log("fetching:", perfectLoops);
          })
        });
  },

  render() {
    console.log("rendering:", this.state.perfectLoops);

    return (
      <div className="row">
        <h1>L8PS</h1>
        <Link className="row" to="/">Main Page</Link>
        <div className="row">
          <AllImgs data={this.state.perfectLoops}/>
        </div>
      </div>
  )}
});

//One of these....
//<AllImgs data={data}/>
//<AllImgs data={this.state.perfectLoops}/>
//<AllImgs url="https://www.reddit.com/r/perfectloops.json"/>