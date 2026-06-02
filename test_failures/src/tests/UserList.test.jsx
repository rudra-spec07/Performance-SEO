import { render, screen } from "@testing-library/react"
import { vi, afterEach } from "vitest"

import UserList from "../components/UserList"
import * as api from "../services/api"

afterEach(() => {
  vi.restoreAllMocks()
})

test(
  "loads and displays users",
  async () => {
    vi.spyOn(
      api,
      "fetchUsers"
    ).mockResolvedValue([
      {
        id: 1,
        name: "Rudra",
        role: "Frontend Dev",
      },
    ])

    render(<UserList />)

    expect(
      screen.getByText(
        "Loading..."
      )
    ).toBeInTheDocument()

    expect(
      await screen.findByText(
        "username: Rudra"
      )
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        "Frontend Dev"
      )
    ).toBeInTheDocument()
  }
)