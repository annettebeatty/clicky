import React from "react";
import "./Results.css";

const Results= props => (
    <ul className="list-group">
        <div className="row">
            {props.results.map(result => 
            <div className="columnn col-md-3" key={result.id}>
                <img
                alt={result.imageUrl}
                src={result.imageUrl}
                />
            </div>
            )}
        </div>
    </ul>
);
  
export default Results;