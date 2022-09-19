// Language: typescript
// @ mitre 2022

import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Cuerpo";
import { Footer } from "./components/Footer";
import { PositionExample } from "./components/Tostada";
import { SizeExample } from "./components/Nota";
import { ChakraProvider } from "@chakra-ui/react";
import { SizeExample2 } from "./components/Nota2";

const body: any = document.querySelector("body");
body.style.backgroundColor = "#FFEF82";
body.style.fontFamily = "Roboto Mono, monospace ";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Header />
      <SizeExample />
      <SizeExample2 />
      <Body />
      <PositionExample />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
