import React from "react";
import "./Results.css";

const Results= props => (
    <ul className="list-group">
        {props.results.map(result => (
        <container key={result.id}>
            <img
            alt={result.title}
            className="img-fluid"
            src={result.images.original_still.url}
            />
       </container>
        ))}
    </ul>
);
  
export default Results;