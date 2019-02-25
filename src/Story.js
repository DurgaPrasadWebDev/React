import React, { Component } from 'react'
import './Story.css'
class Story extends Component {
  render() {
    return (
      <div className="artical">
        <h1>The {this.props.articalno} Artical</h1>
        <p>
            my name is {this.props.mydetails.name}<br/>
            my father name is {this.props.mydetails.father}<br/>
            my mother name is {this.props.mydetails.mother}<br/>
            my brother name is {this.props.mydetails.brother}
        </p>
        
      </div>
    )
  }
}

export default Story
