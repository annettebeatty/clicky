import React from "react";
import "./Results.css";

const Results= props => (
    <ul className="list-group">
        {props.results.map(result => 
        <container key={result.id}>
            <img
            alt={result.imageUrl}
            src={result.imageUrl}
            />
       </container>
        )}
    </ul>
);
  
export default Results;