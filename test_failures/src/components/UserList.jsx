import {
  useEffect,
  useState,
} from "react"

import Loader from "./Loader"
import UserCard from "./UserCard"
import { fetchUsers } from "../services/api"

export default function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] =
    useState(true)

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
        />
      ))}
    </div>
  )
}