import React from "react";
import "./Navbar.css";

const Nav = props => (
    <nav className="navbar navbar-light bg-light">
        <div className="row container-fluid">
            <div className="col-md-4" text-align="center">
                <a href="/"><h2><strong>Clicky Game</strong></h2></a>
            </div>
            <div className="col-md-4">
                <h2>Click an image to begin!</h2>
            </div>
            <div className="col-md-4">
            <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
            </div>
        </div>
    </nav>
);


export default Nav;