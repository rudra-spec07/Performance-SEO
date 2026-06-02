import { mockUsers } from "../test/mocks"

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers)
    }, 1000)
  })
}