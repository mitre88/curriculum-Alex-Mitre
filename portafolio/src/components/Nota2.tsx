// drawer 2
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";

export function SizeExample2() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize:any) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["lg"];

  return (
    <>
      {sizes.map((size) => (
        <Button
          style={{ backgroundColor: "#2155CD", color: "white", margin: "10px" }}
          onClick={() => handleClick(size)}
          key={size}
          m={4}
        >
          {" "}
          Información personal y experiencia profesional{" "}
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{ color: "white", backgroundColor: "#2155CD" }}>
            {" "}
            😏 Información personal y experiencia profesional :
          </DrawerHeader>
          <DrawerBody style={{ backgroundColor: "#FFEF82" }}>
            <div>
            <br></br>
              <details>
                <summary>Datos personales</summary>
                <p> Nombre : Alejandro Hernández mitre</p>
                <p> Dirección : Xalapa, Veracruz-México  </p>
                <p> Teléfono : 52 22 81 08 89 83</p>
                <p> Correo  : bedr10_capacitacion@hotmail.com</p>
                <p> Edad : 40 </p>
              </details>
                <br></br>
              <details>
                <summary>Experiencia Laboral</summary>
                <p> Secretaría de Educación de Veracruz (Docente-Administrativo)</p>
                <p> Secretaría de Educación Pública (Jefe de Departamento)</p>
                <p> Instituto de la Policia Auxiliar (Programador)</p>
                <p>     </p>
                <p>   </p>
                <p>    </p>
              </details>
              <br></br>

              <details>
                
                <summary>Hobbies</summary>
                <p> Leer </p>
                <p> Correr / Ejercicio </p>
                <p> Tecnología </p>
                <p> Escritura </p>
                <p> Tecnología  </p>
                <p> Blockchain     </p>
              </details>

<br></br>
<details>
              <summary>Ubicación</summary>
              <iframe
              width="100%"
              height="130px"

              
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9120000000003!2d-96.925999685007!3d19.540999986876497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9f8b8b8b5c9%3A0x8b8b8b8b8b8b8b8b!2sXalapa%2C%20Ver.!5e0!3m2!1ses!2smx!4v1629200000000!5m2!1ses!2smx">
              </iframe>

              
</details>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
