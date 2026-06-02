export default function UserCard({
  name,
  role,
}) {
  return (
    <div
      className="
      bg-white
      shadow-md
      rounded-lg
      p-4
      border
      "
    >
      <h2 className="font-bold text-lg">
        username: {name}
      </h2>

      <p className="text-gray-500">
        {role}
      </p>
    </div>
  )
}