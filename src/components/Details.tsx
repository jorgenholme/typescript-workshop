interface Props {
  phone: string;
}

export const Details = ({ phone }: Props) => {
  return (
    <div style={{ marginBottom: "2rem", paddingLeft: "1rem" }}>
      <span>{phone}</span>
    </div>
  );
};
