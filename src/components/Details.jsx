export const Details = ({ phone }) => {
  if (!phone) return null;

  return (
    <div style={{ marginBottom: "2rem", paddingLeft: "1rem" }}>
      <span>{phone}</span>
    </div>
  );
};
