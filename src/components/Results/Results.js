import React from "react";
import "./Results.css";

const Results= props => (
    <ul className="list-group">
        <div className="row">
            {props.images.map(result => 
            <div className="column col-md-3" key={result.id}>
                <img
                name="clicked" value={result.id}
                alt={result.imageUrl}
                src={result.imageUrl}
                onClick={ () => props.handleClick(result.id) }
                />
            </div>
            )} 
        </div>
    </ul>
);
  
export default Results;