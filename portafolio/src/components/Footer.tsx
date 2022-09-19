// Language: typescript
// @ mitre 2022

const style: any = {
  backgroundColor: "#2155CD",
  color: "white",
  padding: "1rem",
  position: "fixed",
  bottom: "0",
  width: "100%",
  fontSize: "18px",
  fontWeight: "100",
  textAlign: "center",
  
};

export const Footer = () => {
  return (
    <>
      <div style={style}>
        <a href="https://podcasts.apple.com/us/podcast/tecno-educaci%C3%B3n/id1128564231">
          Podcast
        </a>
&nbsp;|&nbsp;
        <a href="https://www.facebook.com/secretariadeeducacion">Facebook</a>
        &nbsp;|&nbsp;

        <a href="https://www.blogger.com/blog/post/edit/preview/4586900493063146648/238065013787179211">
          {" "}
          Blog personal{" "}
        </a>
        &nbsp;|&nbsp;

        <a href="https://www.youtube.com/channel/UC2bKRtbYFcvLCRkGEJx4w1A">
          Youtube
        </a>
      </div>
    </>
  );
};
