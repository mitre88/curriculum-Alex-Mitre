// Language: typescript
// @ mitre 2022

import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Cuerpo";
import { Footer } from "./components/Footer";
import { Carousel } from "./components/Carousel";

const body : any =document.querySelector('body');
body.style.backgroundColor='#FFFDE3';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
    <Carousel />
  </React.StrictMode>
);
