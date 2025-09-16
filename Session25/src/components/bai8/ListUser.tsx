import { Link } from "react-router-dom";

const ListUser = () => {
  const users = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nvc@gmail.com",
      address: "Ninh Bình",
    },
  ];

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
        >
          <p>
            <b>Id:</b> {user.id}
          </p>
          <p>
            <b>UserName:</b> {user.name}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Address:</b> {user.address}
          </p>
          <Link to={`/users/${user.id}`}>
            <button>Xem chi tiết</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListUser;