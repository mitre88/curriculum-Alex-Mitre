// Language: typescript
// @ mitre 2022

const style: any = {
  backgroundColor: "#EAE509",
  color: "green",
  padding: "1rem",
  position: "fixed",
  bottom: "0",
  width: "100%",
  padding: "35px",
  fontSize: "18px",
  fontWeight: "100",
};

export const Footer = () => {
  return (
    <>
      <div style={style}>
        <columns
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <li>
            <a href="https://podcasts.apple.com/us/podcast/tecno-educaci%C3%B3n/id1128564231">
              Podcast
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/secretariadeeducacion">
              Facebook
            </a>
          </li>

          <li>
            <a href="https://www.blogger.com/blog/post/edit/preview/4586900493063146648/238065013787179211">
              {" "}
              Blog personal{" "}
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/channel/UC2bKRtbYFcvLCRkGEJx4w1A">
              Youtube
            </a>
          </li>
        </columns>
      </div>
    </>
  );
};
