import { useState } from "react";
import { Details } from "./Details";

export const User = ({ name, email, phone }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "35rem",
          justifyContent: "space-between",
        }}
      >
        <span>{name}</span>

        <span>{email}</span>

        <button onClick={() => setShowDetails((prev) => !prev)}>
          Show details
        </button>
      </div>

      {showDetails && <Details phone={phone} />}
    </div>
  );
};
