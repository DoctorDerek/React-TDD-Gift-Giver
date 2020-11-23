import React, { useState } from "react"
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap"

const Gift = () => {
  const [person, setPerson] = useState("")
  const [present, setPresent] = useState("")

  return (
    <div>
      <Form>
        <FormGroup>
          <FormLabel>Person</FormLabel>
          <FormControl
            className="input-person"
            onChange={(event) => {
              setPerson(() => event.target.value)
            }}
          ></FormControl>
        </FormGroup>
        <FormGroup>
          <FormLabel>Present</FormLabel>
          <FormControl
            className="input-present"
            onChange={(event) => {
              setPresent(() => event.target.value)
            }}
          ></FormControl>
        </FormGroup>
      </Form>
    </div>
  )
}

export default Gift
