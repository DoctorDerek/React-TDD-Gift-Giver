import React from "react"
import { shallow } from "enzyme"
import App from "./App"

const app = shallow(<App />)

// It Renders.
it("renders correctly", () => {
  expect(app).toMatchSnapshot()
})
