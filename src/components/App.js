import React, { Component } from "react"
import Gift from "./Gift"

/**
 * Class component version of App
 * (based exactly on course by David Joseph Katz)
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props)

    this.state = { gifts: [] }
  }

  addGift = () => {
    const { gifts } = this.state
    const ids = gifts.map((gift) => gift.id)
    // Find max ID; could use Math.max() and ... spread operator
    // But a for loop is faster with large data sets typically
    let maxID = 0
    for (const id of ids) {
      if (id > maxID) {
        maxID = id
      }
    }
    gifts.push({ id: maxID + 1 })
    this.setState({ gifts })
  }

  removeGift = (id) => {
    const gifts = this.state.gifts.filter((gift) => gift.id !== id)
    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <button id="add-gift-button" onClick={this.addGift}>
          Add Gift
        </button>
        <div id="gift-list">
          {this.state.gifts.map((gift) => (
            <Gift id={gift.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default App
