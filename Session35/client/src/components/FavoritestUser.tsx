// src/components/FavoritesUser.tsx
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleFavorite } from "../redux/favoritesSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

function FavoritesUser() {
  const users = useSelector((state: RootState) => state.favorites.users);
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px" }}>
      <h3>List Favorites User</h3>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px 0",
          }}
        >
          <p>UserName: {user.name}</p>
          <p>
            Favorites:{" "}
            <span
              onClick={() => dispatch(toggleFavorite(user.id))}
              style={{ cursor: "pointer", fontSize: "18px", color: "red" }}
            >
              {user.favorite ? <HeartFilled /> : <HeartOutlined />}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default FavoritesUser;