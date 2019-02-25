import React, { Component } from 'react'
import './Main.css'
class Main extends Component {
  render() {
    return (
      <div >
        <main>
            {this.props.children}
        </main>
      </div>
    )
  }
}

export default Main
