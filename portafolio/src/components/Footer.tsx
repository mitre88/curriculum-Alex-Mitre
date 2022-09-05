// Language: typescript
// @ mitre 2022

const style: any = {
  backgroundColor: "black",
  color: "yellow",
  padding: "1rem",
  position: "fixed",
  bottom: "0",
  width: "100%",
  padding: "0 130px",
  fontSize: "18px",
  fontWeight: "100",
};

export const Footer = () => {
  return (
    <>
      <div style={style}>
        <ul>
          <li>Podcast</li>
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
        </ul>
      </div>
    </>
  );
};
