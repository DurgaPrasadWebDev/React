import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navmenu from './Navmenu';
import Main from './Main';
import Story from './Story'
class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeclass:"changename"
      }
      window.onscroll=this.f;
    }
    
  f = () =>
  {
      if(window.pageYOffset)
      {
        this.setState({changeclass : "change"})
      }
      else
      {
          this.setState({changeclass:"changename"})
      }
    
  }  
  render() {
      
    return (
      <div className="App">
        <div className={this.state.changeclass}>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Navmenu/>
        </div>
        <Main>
            <Story articalno="First" mydetails={{name : "durga", father : "narasimharao",mother : "venkatalaxmi", brother : "naga"}}/>
            <Story articalno="Second" mydetails={{name : "durga", father : "narasimharao",mother : "venkatalaxmi", brother : "naga"}}/>
            <Story articalno="Thrid" mydetails={{name : "durga", father : "narasimharao",mother : "venkatalaxmi", brother : "naga"}}/>
            <Story articalno="Fourth" mydetails={{name : "durga", father : "narasimharao",mother : "venkatalaxmi", brother : "naga"}}/>
        </Main>
      </div>
    );
  }
}

export default App;
