import React, { Component } from "react"
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap"

class Gift extends Component {
  constructor(props) {
    super(props)
    this.state = { person: "", present: "" }
  }

  render() {
    return (
      <Form className="gift">
        <FormGroup key="Person">
          <FormLabel>Person</FormLabel>
          <FormControl
            className="input-person"
            onChange={(event) => this.setState({ person: event.target.value })}
          ></FormControl>
        </FormGroup>
        <FormGroup key="Present">
          <FormLabel>Present</FormLabel>
          <FormControl
            className="input-present"
            onChange={(event) => this.setState({ present: event.target.value })}
          ></FormControl>
        </FormGroup>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.id)}
        >
          Remove Gift
        </Button>
      </Form>
    )
  }
}

export default Gift
