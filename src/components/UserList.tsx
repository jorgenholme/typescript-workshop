import { users } from "../data";
import { User } from "./User.js";

export const UserList = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {users.map((user) => (
        <User
          name={user.name}
          email={user.email.toLowerCase()}
          phone={user.phone}
        />
      ))}
    </div>
  );
};
