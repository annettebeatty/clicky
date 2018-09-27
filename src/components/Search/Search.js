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
    images: []
  };

   // When this component mounts, search the Giphy API for pictures of kittens
   componentDidMount() {
     console.log("Loading array");
     this.loadArray();
     console.log("State: ", this.state.results);
    // this.searchGiphy("kittens");
  }

  // Need something to load the array
  loadArray = () => {
    var imageArray = [];

    for (let i=1; i < 13; i++)
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
  }

  renderPage = () => {
    if (this.state.results) {
      return <Results results={this.state.results}/>;
    }
  };

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
        {this.renderPage()}
      </div>
    );
  }
}
  
export default Search;