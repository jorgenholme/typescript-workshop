import "./App.css";
import { UserList } from "./components/UserList.js";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100rem",
      }}
    >
      <h1>Users</h1>
      <UserList />
    </div>
  );
}

export default App;
