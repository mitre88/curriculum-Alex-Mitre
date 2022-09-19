const style: any = {
  backgroundColor: "#2155CD",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "70px",
  padding: "0 90px",
  fontSize: "23px",
  fontWeight: "100",
  marginTop: "25px",
  marginLeft : "0px", 
};

export const Header = () => {
  return (
    <>
      <h4 style={style}>
        Alejandro Mitre
        <img
          style={{ borderRadius: "40rem" , border: "2px solid blue" }}
          src="https://media-exp1.licdn.com/dms/image/C5603AQE0-ruom0j7GQ/profile-displayphoto-shrink_200_200/0/1645033019884?e=1668038400&v=beta&t=AZLqxnrsVR1y1q-g9Xt8IQGSLOjpMo9JnjBdBsf_NUY"
          width="110"
          height="110"
          alt="alex-mitre"
          ></img>
      </h4>
    </>
  );
};
