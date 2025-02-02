import { users } from "../data.js";
import { User } from "./User";

export const UserList = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {users.map((user) => (
        <User name={user.name} email={user.email.toLowerCase()} />
      ))}
    </div>
  );
};
