import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.js";
import PostBody from "./components/PostBody.js";

console.log("Hello buttface");

ReactDOM.render(
  <App />,
    document.getElementById("react-root")
);

ReactDOM.render(
    <PostBody />,
    document.getElementById("all-post-body")
);
