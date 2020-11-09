import React from "react"
import { shallow } from "enzyme"
import AppFunctionalComponent from "./AppFunctionalComponent"

const appFunctionalComponent = shallow(<AppFunctionalComponent />)

// It Renders.
it("renders correctly", () => {
  expect(appFunctionalComponent).toMatchSnapshot()
})
