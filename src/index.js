import React from "react"
import ReactDOM from "react-dom"

import App from "./components/App"
import AppFunctionComponent from "./components/AppFunctionComponent"

const rootElement = document.getElementById("root")
ReactDOM.render(
  <React.StrictMode>
    <h1>Class Component</h1>
    <App />
    <hr />
    <h1>Function Component</h1>
    <AppFunctionComponent />
  </React.StrictMode>,
  rootElement
)
