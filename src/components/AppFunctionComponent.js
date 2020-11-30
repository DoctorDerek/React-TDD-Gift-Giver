import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { maxNumber, removeItemByID } from "../helper_functions"
import GiftFunctionComponent from "./GiftFunctionComponent"

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
    setGifts((gifts) => [...gifts, { id: maxNumber(ids) + 1 }])
  }

  const removeGift = (id) => {
    setGifts((gifts) => removeItemByID(gifts, id))
  }

  return (
    <div>
      <h2>Gift Giver</h2>
      <Button id="add-gift-button" onClick={() => addGift()}>
        Add Gift
      </Button>
      <div id="gift-list">
        {gifts.map((gift) => (
          <GiftFunctionComponent
            id={gift.id}
            key={gift.id}
            removeGift={removeGift}
          />
        ))}
      </div>
    </div>
  )
}

export default AppFunctionComponent
