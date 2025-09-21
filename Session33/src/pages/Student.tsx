import { useAppSelector } from "../store/hooks";

export default function Student() {
  const users = useAppSelector((state) => state.students.users);

  return (
    <div>
      <h1>Quản lý sinh viên!</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
