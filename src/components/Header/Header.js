import React from "react";
import "./Header.css";

const Header = props => (


  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Click an image to begin!</h1>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
</div>

);

export default Header;