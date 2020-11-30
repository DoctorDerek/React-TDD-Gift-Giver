import React, { useState } from "react"
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap"

const Gift = ({ id, removeGift }) => {
  const [person, setPerson] = useState("")
  const [present, setPresent] = useState("")

  return (
    <Form className="gift">
      <FormGroup key="Person">
        <FormLabel>Person: </FormLabel>
        <span className="person">{person}</span>
        <FormControl
          className="input-person"
          onChange={(event) => setPerson(() => event.target.value)}
        ></FormControl>
      </FormGroup>
      <FormGroup key="Present">
        <FormLabel>Present: </FormLabel>
        <span className="present">{present}</span>
        <FormControl
          className="input-present"
          onChange={(event) => setPresent(() => event.target.value)}
        ></FormControl>
      </FormGroup>
      <Button className="btn-remove" onClick={() => removeGift(id)}>
        Remove Gift
      </Button>
    </Form>
  )
}

export default Gift
