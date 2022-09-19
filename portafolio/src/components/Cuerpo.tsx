// Language: typescript
// @ mitre 2022

const style: any = {
  color: "blue",
  padding: ".8rem",
  position: "fixed",
  fontSize: "19px",
  fontWeight: "250",
};

export const Body = () => {
  return (
    <div style={style}>
      <div>
        <div >
          <h4 style={{ color: "black" , marginLeft: "70px" }}>Portafolio al { 
            Date().trimEnd().split(" ")[2] + " de " + Date().trimEnd().split(" ")[1] + " de " + Date().trimEnd().split(" ")[3]} :
          </h4>
          <a
            href="mailto: bedr10_capacitacion@hotmail.com "
            style={{
              color: "blue",
              fontSize: "20px",
              marginLeft: "38px",
              textDecoration: "none",
              padding: "2rem",
            }}
          >
            Contactame también por correo electrónico
          </a>
        </div>
        <br></br>
        <div>
            <li>
              <a href="https://mx.linkedin.com/in/alejandro-hernandez-mitre-7809a3153?trk=people-guest_people_search-card">
                Pefil de Linkedin
              </a>{" "}
            </li>
            <br></br>
            <li>
              <a href="https://www.itsx.edu.mx/">
                Ingeniero en Sistemas Computacionales Instituto Tecnológico Superior de Xalapa
              </a>
            </li>
            <br></br>

            <li>
              <a href="https://upn.mx/">Licenciado en Educación Universidad Pedagógica Nacional</a>
            </li>
            <br></br>

            <li>
              <a href="https://upn.mx/">
                Maestría en Educación con especialidad en{" "}
                <strong style={{ color: "#EE6983  " }}>
                  Innovación y Tecnologías
                </strong> Universidad Pedagógica Nacional
              </a>
            </li>
            <br></br>

            <li>
              <a href="https://centroausubel.edu.mx/">
                Doctorado en Educación{" "}
                <strong style={{ color: "#EE6983  " }}>
                  especializado en innovación educativa
                </strong> Centro de Estudios Especializados Ausubel
              </a>
            </li>
        
        </div>
      </div>
    </div>
  );
};
