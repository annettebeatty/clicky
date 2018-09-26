import React from "react";
import "./Header.css";

const Header = () => (
    <div className="jumbotron">
        <h1 className="text-center title"> 
            <strong><i className="fa fa-newspaper"></i>Clicky Game</strong>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </h1>
    </div>
);

export default Header;