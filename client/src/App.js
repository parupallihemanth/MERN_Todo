import React, { Component } from 'react';
import Navbar from './components/Navbar';
import AddItem from './components/addItem';
import ItemsList from './components/itemsList';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <div>
        <AddItem />
        <ItemsList />
        </div>
        
        
        
      </div>
    )
  }
}

export default App