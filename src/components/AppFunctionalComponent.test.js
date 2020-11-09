import React from "react"
import { shallow } from "enzyme"
import AppFunctionComponent from "./AppFunctionComponent"

const appFunctionComponent = shallow(<AppFunctionComponent />)

// It Renders.
it("renders correctly", () => {
  expect(appFunctionComponent).toMatchSnapshot()
})
