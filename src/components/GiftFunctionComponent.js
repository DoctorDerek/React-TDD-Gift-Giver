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
    </Form>
  )
}

export default Gift
