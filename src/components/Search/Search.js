import React, { Component } from "react";
import Nav from "../Navbar/Navbar"
import Header from "../Header/Header"
import Results from "../Results/Results"

class Search extends Component {
  // Setting initial state
  state = {
    score: 0,
    topScore: 0,
    images: [],
    clicked: 0
  };

   // When this component mounts, search the Giphy API for pictures of kittens
   componentDidMount() {
     console.log("Loading array");
     this.loadArray();

     /*
     var req = require.context("./assets/images", false, /.*\.jpg$/);
      req.keys().forEach(function(key){
         req(key);
     });
     */
    // this.searchGiphy("kittens");
  }

  // Need something to load the array
  loadArray = () => {
    var imageArray = [];

    for (let i=0; i < 12; i++)
    {
      imageArray.push({
        id: i,
        imageUrl: "./assets/images/puppy" + i + ".jpg",
        state: false
      });
    }

    this.setState({results: imageArray}, function () {
      console.log("Set State", this.state.results);
    });

    this.setState({ score: 0 });
  }

  renderPage = event => {
    if (this.state.results) {
      return <Results results={this.state.results} handleClick={this.handleClick} />;
    }
  };

  // Clicked an image
  handleClick = id => {
    console.log("Clicked ", id);

    console.log("Results ", this.state.results[id]);

    // Check if we've clicked before
    if (this.state.results[id].state === false)
    {
      // Not clicked, set clicked element to true
      let objChange = {
        id: id,
        imageUrl: this.state.results[id].imageUrl,
        state: true
      }
      this.state.results.splice(id, 1, objChange);
      console.log("Results ", this.state.results);

      // Add to score
      let score = this.state.score + 1;
      this.setState ({ score: score });

    }
    else {
    // Lost - picked a previous picture, reset game
      if (this.state.score > this.state.topScore)
        this.setState ({ topScore: this.state.score });
        
      this.loadArray();
    }
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
        {this.renderPage()}
      </div>
    );
  }
}
  
export default Search;