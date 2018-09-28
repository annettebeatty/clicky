import React, { Component } from "react";
import Nav from "../Navbar/Navbar"
import Header from "../Header/Header"
import Results from "../Results/Results"

class Search extends Component {
  // Setting initial state
  // Need two arrays - the origial array "images" so we can
  // reference by id and the "shuffledArray" for display
  state = {
    score: 0,
    topScore: 0,
    images: [],
    shuffledArray: [],
    clicked: 0
  };

   // When this component mounts, load/clear array
   componentDidMount() {
     this.loadArray();
  }

  // This function resets the images and shuffledArray
  loadArray = () => {
    var imageArray = [];

    // Create an array of objects we'll load into "images"
    // This will have an id element, URL link and click state
    for (let i = 0; i < 12; i++)
    {
      imageArray.push({
        id: i,
        imageUrl: "./assets/images/puppy" + i + ".jpg",
        state: false
      });
    }

    // Set the images array to the newly created array
    this.setState({ images: imageArray}, function () {
      // console.log("Set State", this.state.images);
    });

    // Since this is a reset, the shuffledArray which will
    // be passed to be displayed equals our original array.
    // Also, reset the score
    this.setState({ shuffledArray: imageArray });
    this.setState({ score: 0 });
  }

  // This page renders the dog images
  renderPage = event => {
    if (this.state.shuffledArray) {
      return <Results images={this.state.shuffledArray} handleClick={this.handleClick} />;
    }
  };

  // This function handles when an image is clicked
  handleClick = id => {
    console.log("Clicked ", id);

    // Check if we've clicked before
    for (let i = 0; i < 12; i++) {
      // Find this element in the array.  After the first shuffle,
      // id not longer indicates array element, so we find it in the
      // saved "images" array
      if (this.state.images[i].id === id) {
        // Found the array element in "images" array

        if (this.state.images[id].state === false) {
          // Not clicked before, so we'll want to flag it
          // Create an object with the state flag set
          // as "true"
          let objChange = {
            id: this.state.images[i].id,
            imageUrl: this.state.images[id].imageUrl,
            state: true
          }
          // Put the array element back into the array
          // with the new state flag setting
          this.state.images.splice(id, 1, objChange);
          console.log("Found new Results  ", id);

          // Increase to the score
          let score = this.state.score + 1;
          this.setState ({ score: score });

          // Create a shuffled array to display
          let newArray = this.state.images.slice();
          this.setState({ shuffledArray : this.shuffleArray(newArray) });
        }
        else {  
          // Lost - picked a picture that was selected before.
          // Update the high score, if we beat it
          if (this.state.score > this.state.topScore)
            this.setState ({ topScore: this.state.score });

          // Reset the game
          this.loadArray();
        }
      }
    }
  };

  // This logic shuffles the elements in the array
  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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