import React, { Component } from "react"

/**
 * Class component version of App
 * (based exactly on course by David Joseph Katz)
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor() {
    super()

    this.state = { gifts: [] }
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
      </div>
    )
  }
}

export default App
