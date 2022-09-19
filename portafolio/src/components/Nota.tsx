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

export function SizeExample() {
  const handleClick = (newSize:any) => {
    setSize(newSize);
    onOpen();
  };
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          Habilidades y competencias{" "}
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader style={{ color: "white", backgroundColor: "#2155CD" }}>
            {" "}
            😏 Habilidades y competencias :
          </DrawerHeader>
          <DrawerBody style={{ backgroundColor: "#FFEF82"}}>
            <div >
              <br></br>
              <p style={{ color: "#2155CD"}}>
                <p>
                  <strong> Programación :</strong>
                  <br></br>
                  <br></br>
                  
                  <text>
                    <ul>
                      <li>Programador JavaScript </li>
                      <li>Especializado en React y Hooks y react-native </li>
                      <li>Angular </li>
                      <li>Node js y NPM</li>
                      <li>Typescript, clean code y arquitectura limpia </li>
                      <li>HTML y web components</li>
                      <li>CSS y librerías de estilo, frameworks de front-end</li>
                      <li>.Net y Net Core 6, asp, C# y visual Studio</li>
                      <li>SQL y manejo de Bases de Datos relacionales y no relacionales (MongoDb y firebase)</li>
                      <li>Desarrollo de Aplicaciones Web responsivas y modernas</li>
                      <li>Desarrollo de Aplicaciones Moviles para Android </li>
                      <li>
                        Desarrollo de Aplicaciones Moviles para IOS (Iphone){" "}
                      </li>
                    </ul>
                    <br></br>
                    <p>
                      Desarrollo de bots de whatsApp y facebook messenger 
                    </p>
                    <p>
                      Manejo y gestión de redes sociales y páginas web empresariales 
                    </p>
                    <p>
                      Campañas de marketing digital y add ons 
                    </p>
                    <p>
                      Big data, manejo y gestión de bases de datos
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>
                      "Creer que todo tiene solución no es optmismo es{" "}
                      <strong style={{ color: "green" }}>talento"</strong>
                    </p>
                  </text>
                </p>
              </p>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
} ;
