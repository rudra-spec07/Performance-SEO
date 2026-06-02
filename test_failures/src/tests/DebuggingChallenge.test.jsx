import {
  render,
  screen,
} from "@testing-library/react"

import {
  test,
  expect,
} from "vitest"

import {
  useEffect,
  useState,
} from "react"

function AsyncGreeting() {
  const [message, setMessage] =
    useState("Loading...")

  useEffect(() => {
    setTimeout(() => {
      setMessage(
        "Welcome Rudra"
      )
    }, 1000)
  }, [])

  return <h1>{message}</h1>
}

test(
  "shows greeting",
  async () => {
    render(
      <AsyncGreeting />
    )
screen.debug();
    expect(
     await screen.findByText(
        "Welcome Rudra"
      )
      
    ).toBeInTheDocument()
    screen.debug();
  }
)