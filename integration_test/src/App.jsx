import SignupForm from "./components/SignupForm"

function App() {

  const handleSignup = (data) => {
    console.log("Signup Data:", data)
  }

  return (
    <SignupForm
      onSignup={handleSignup}
    />
  )
}

export default App