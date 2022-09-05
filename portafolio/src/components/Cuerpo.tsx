// Language: typescript
// @ mitre 2022

const style: any = {
  color: "#2A0944",
  padding: "2rem",
  position: "fixed",
  fontSize: "19px",
  fontWeight: "250",
};

export const Body = () => {
  return (
    <div style={style}>
      <div >
        <div className="body__container__item">
          <h4 style={{ color: "#2A0944" }}>→ Portafolio</h4>
          <p>
            Este es mi portafolio, en el cual encontraras 
            <strong style={{color:"green"}}> mis proyectos y mi
            información personal :{" "}

            </strong>
          </p>
        </div>
        <div >
          <h4 style={{ color: "#2A0944" }}>→ Proyectos</h4>
          <p>
            En esta sección encontraras todos 
            
            <strong style={{color:"green"}}> mis proyectos
            </strong>
            
            
            , los cuales son de
            diferentes categorías
          </p>
          
        </div>
        <div >
          <h4 style={{ color: "#2A0944" }}>→ Información</h4>
          <p>
            En esta sección encontraras mi <strong style={{color:"green"}}>
                  información personal</strong>
            
            , como mi correo,
            mi número de teléfono, mi edad y mi ubicación
          </p>
          <ul>
            <li>Ingeniero en Sistemas Computacionales </li>
            <li>Licenciado en Educación</li>
            <li>
              Maestría en Educación con especialidad en <strong style={{color:"green"}}>
                
                Innovación y Tecnologías
                </strong>
            </li>
            <li>
              Doctorado en Educación <strong style={{color:"green"}}>
                
                especialializado en innovación educativa
                </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
