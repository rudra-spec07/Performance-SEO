import UserList from "./components/UserList"

export default function App() {
  return (
    <div
      className="
      min-h-screen
      bg-slate-100
      p-10
      "
    >
      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        User Dashboard
      </h1>

      <UserList />
    </div>
  )
}