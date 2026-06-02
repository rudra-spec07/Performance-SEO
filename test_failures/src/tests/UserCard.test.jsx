import { render, screen } from "@testing-library/react"
import UserCard from "../components/UserCard"

test("renders user information", () => {
  render(
    <UserCard
      name="Rudra"
      role="Tester"
    />
  )

  expect(
    screen.getByText("username: Rudra")
  ).toBeInTheDocument()

  expect(
    screen.getByText("Tester")
  ).toBeInTheDocument()
})