import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

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

  const user = users.find((u) => u.id.toString() === id);

  if (!user) {
    return <h2>User not found!</h2>;
  }

  return (
    <div>
      <h2>Thông tin chi tiết</h2>
      <div
        style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}
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
        <button>Xem chi tiết</button>
      </div>
    </div>
  );
};

export default UserDetail;