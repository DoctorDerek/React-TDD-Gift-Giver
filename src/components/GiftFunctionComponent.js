import React, { useState } from "react"
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap"

const Gift = ({ id, removeGift }) => {
  // eslint-disable-next-line because we're not using person directly
  const [person, setPerson] = useState("")
  // eslint-disable-next-line because we're not using present directly
  const [present, setPresent] = useState("")

  return (
    <Form>
      <FormGroup key="Person">
        <FormLabel>Person</FormLabel>
        <FormControl
          className="input-person"
          onChange={(event) => {
            setPerson(() => event.target.value)
          }}
        ></FormControl>
      </FormGroup>
      <FormGroup key="Present">
        <FormLabel>Present</FormLabel>
        <FormControl
          className="input-present"
          onChange={(event) => {
            setPresent(() => event.target.value)
          }}
        ></FormControl>
      </FormGroup>
      <Button className="btn-remove" onClick={() => removeGift(id)}>
        Remove Gift
      </Button>
    </Form>
  )
}

export default Gift
