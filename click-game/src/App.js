import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Item from './Components/Item';
import Items from './Items.json'

class App extends Component {
 
  constructor(){
    super()

    this.handleShuffleItems = this.handleShuffleItems.bind(this)
  }

  state = {
    score: 0,
    highScore: 0,
    highestScore: 10,
    Items: Items
  };
//shuffle items arr
  randomShuffle = (arr) => {
    let currentIndex = arr.length;
    let tempValue;
    let random;

   
    if (0 !== currentIndex) {
      random = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = arr[currentIndex];
      arr[currentIndex] = arr[random];
      arr[random] = tempValue;
    }

    return arr;
  }

//Handle answers correct/incorrect

  handleIncorrectAnswer = () => {
    //incorrect reset score to 0
    this.setState({score: 0 })
    const updatedItems = this.state.Items.map(castIcon => castIcon.isClicked === true ? { ...castIcon, isClicked: false } : castIcon)
    return updatedItems
  }

  handleCorrectAnswer = () => {
    //increment score for correct answer by 1 
      if (this.state.score+1 > this.state.highScore) {
        this.setState({highScore: this.state.highScore+1})
      }
      if (this.state.score+1 === this.state.highestScore) {
        this.setState({score: this.state.score+1})
      }else{
        this.setState({score: this.state.score+1})
      }
    }


 

  ///handle reset when game is won 
  //if highest score is rendered reset scorse to 0 
  // handleResetVictory()
  //victory function not resetting 
 

  handleShuffleItems = (name) => {
    var resetGame = false;
    const Items = this.state.Items.map(castIcon => {
    
      if(castIcon.name === name) {
        if (castIcon.isClicked === false) {
          this.handleCorrectAnswer()
          return { ...castIcon, isClicked: true}
        }else{
          resetGame = true
          return { ...castIcon, isClicked: false}
        }
      }
      return castIcon
    })

    if (resetGame) {
      this.setState({
        Items: this.randomShuffle(this.handleIncorrectAnswer())
      })
    }else{
      this.setState({ Items: this.randomShuffle(this.handleResetVictory(Items)) })
    }
    
  }

 ///render character icons 

  handleRenderItems = () => {
    return this.state.Items.map((item) =>
            <Item 
              image={item.image} 
              name={item.name} 
              key={Item.id} 
              onClick={this.handleShuffleItems} 
            />
          );
  }

  render() {
    return (
      <div className="App">
        <NavBar score={this.state.score}
          highScore={this.state.highScore}/>
        <Banner />
        <div className="content">
          {this.handleRenderItems()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;