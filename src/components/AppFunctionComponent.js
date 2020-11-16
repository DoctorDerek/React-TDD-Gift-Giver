import React, { useState } from "react"

/**
 * Function component version of the App using React Hooks
 *
 * @param {*} props
 * @return {*}
 */
const AppFunctionComponent = (props) => {
  const [gifts, setGifts] = useState([])

  const addGift = () => {
    const ids = gifts.map((gift) => gift.id)
    // Find max ID; could use Math.max() and ... spread operator
    // But a for loop is faster with large data sets typically
    let maxID = 0
    for (const id of ids) {
      if (id > maxID) {
        maxID = id
      }
    }
    setGifts((gifts) => [...gifts, { id: maxID + 1 }])
  }

  return (
    <div>
      <h2>Gift Giver</h2>
      <button id="add-gift-button" onClick={() => addGift()}>
        Add Gift
      </button>
      <div id="gift-list">
        {gifts.map((gift) => (
          <div key={gift.id}>{gift.id}</div>
        ))}
      </div>
    </div>
  )
}

export default AppFunctionComponent
