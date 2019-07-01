import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Item from './Components/Item';
import Items from './Items.json'

class App extends Component {
 
  constructor(){
    super()

    // this.handleShuffleItems = this.handleShuffleItems.bind(this)
  }

  state = {
    score: 0,
    highScore: 0,
    maxScore: 10,
    Items: Items
  };



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
        <NavBar/>
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