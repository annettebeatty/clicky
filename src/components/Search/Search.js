import React, { Component } from "react";
import Nav from "../Navbar/Navbar"
import Header from "../Header/Header"
import API from "../utils/API";
import Results from "../Results/Results"

class Search extends Component {
  // Setting initial state
  state = {
    score: 0,
    topScore: 0,
    results: []
  };

   // When this component mounts, search the Giphy API for pictures of kittens
   componentDidMount() {
    this.searchGiphy("kittens");
  }

  searchGiphy = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      /*
      .then (function(res) {
        console.log(res.data.data);
        this.setState({
          results: res.data.data
        });
      }
      )
      */
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header
        />
        <Results
          results={this.state.results}
        />
      </div>
    );
  }
}
  
export default Search;