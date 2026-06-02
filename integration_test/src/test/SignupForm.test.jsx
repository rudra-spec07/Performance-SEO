import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"
import SignupForm from "../components/SignupForm"

test(
"shows validation and submits valid data",
async () => {

  const onSignup = vi.fn()

  render(
    <SignupForm onSignup={onSignup}/>
  )

  const submitButton =
    screen.getByRole(
      "button",
      { name:/signup/i }
    )

  // Empty submit
  await userEvent.click(submitButton)

  expect(
    screen.getByRole("alert")
  ).toHaveTextContent(
    "All fields are required"
  )

  expect(
    onSignup
  ).not.toHaveBeenCalled()

  // Fill form
  await userEvent.type(
    screen.getByPlaceholderText(/name/i),
    "Rudra"
  )

  await userEvent.type(
    screen.getByPlaceholderText(/email/i),
    "rudra@test.com"
  )

  await userEvent.type(
    screen.getByPlaceholderText(/password/i),
    "123456"
  )

  // Submit valid form
  await userEvent.click(submitButton)

  expect(
    screen.queryByRole("alert")
  ).toBeNull()

  expect(
    onSignup
  ).toHaveBeenCalledWith({
    name:"Rudra",
    email:"rudra@test.com",
    password:"123456",
  })
})


// ============================
// NEW TEST ADDED BELOW
// ============================

// test(
// "shows error when password is missing",
// async () => {

//   const onSignup = vi.fn()

//   render(
//     <SignupForm onSignup={onSignup}/>
//   )

//   // Fill ONLY name
//   await userEvent.type(
//     screen.getByPlaceholderText(/name/i),
//     "Rudra"
//   )

//   // Fill ONLY email
//   await userEvent.type(
//     screen.getByPlaceholderText(/email/i),
//     "rudra@test.com"
//   )

//   // Password intentionally missing

//   // Click signup
//   await userEvent.click(
//     screen.getByRole(
//       "button",
//       { name:/signup/i }
//     )
//   )

//   // Error should appear
//   expect(
//     screen.getByRole("alert")
//   ).toHaveTextContent(
//     "All fields are required"
//   )

//   // Callback should NOT fire
//   expect(
//     onSignup
//   ).not.toHaveBeenCalled()
// })