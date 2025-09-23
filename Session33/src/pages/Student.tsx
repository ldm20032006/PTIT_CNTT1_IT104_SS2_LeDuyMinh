<<<<<<< HEAD
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
=======
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
>>>>>>> 9ff6c1a591451acca643a6e60899e7d056a54a8c
