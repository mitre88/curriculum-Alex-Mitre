// Language: typescript
// @ mitre 2022

const style: any = {
  color: "#2A0944",
  padding: ".8rem",
  position: "fixed",
  fontSize: "19px",
  fontWeight: "250",
};

export const Body = () => {
  return (
    <div style={style}>
      <div>
        <div className="body__container__item">
          <h4 style={{ color: "black" }}>Portafolio al { 
            Date().trimEnd().split(" ")[2] + " de " + Date().trimEnd().split(" ")[1] + " de " + Date().trimEnd().split(" ")[3]} :
          </h4>
          <a
            href="mailto: bedr10_capacitacion@hotmail.com "
            style={{
              color: "blue",
              fontSize: "20px",

              textDecoration: "none",
              padding: "2rem",
            }}
          >
            Contactame también por correo electrónico
          </a>
          <p style={{ padding: ".5rem" }}>
            Este es mi portafolio, en el cual encontraras
            <strong style={{ color: "red" }}>
              {" "}
              mis proyectos y mi información personal :{" "}
            </strong>
          </p>
        </div>
        <div>
          <h4 style={{ color: "#2A0944" }}>
            <a href="./proyectos.html" target="_blank">
                Proyectos
            </a>
            </h4>
          <p style={{ padding: ".5rem" }}>
            En esta sección encontraras todos
            <strong style={{ color: "red" }}> mis proyectos</strong>, los
            cuales son de diferentes categorías
          </p>
        </div>
        <div>
          <h4 style={{ color: "#2A0944" }}>
            <a href="./informacion.html" target="_blank">
            Información
            </a>
            </h4>
          <p style={{ padding: ".5rem" }}>
            En esta sección encontraras mi{" "}
            <strong style={{ color: "red" }}>información personal</strong>,
            como mi correo, mi número de teléfono, mi edad y mi ubicación
          </p>
          <ul>
            <li>
              <a href="https://mx.linkedin.com/in/alejandro-hernandez-mitre-7809a3153?trk=people-guest_people_search-card">
                Pefil de Linkedin
              </a>{" "}
            </li>
            <li>
              <a href="https://www.itsx.edu.mx/">
                Ingeniero en Sistemas Computacionales
              </a>
            </li>
            <li>
              <a href="https://upn.mx/">Licenciado en Educación</a>
            </li>
            <li>
              <a href="https://upn.mx/">
                Maestría en Educación con especialidad en{" "}
                <strong style={{ color: "red" }}>
                  Innovación y Tecnologías
                </strong>
              </a>
            </li>
            <li>
              <a href="https://centroausubel.edu.mx/">
                Doctorado en Educación{" "}
                <strong style={{ color: "red" }}>
                  especializado en innovación educativa
                </strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
