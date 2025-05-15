import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./components/Component";

function App() {
  return (
    <>
      {/* CSS Global
      Editando Index CSS */}

      <h1>Era uma vez...</h1>

      <p>
        Uma história muito loka em alemão, se liga: Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatibus perspiciatis ex cumque
        laborum dolorum illum dicta error ullam, inventore, ratione, nihil
        architecto molestiae ipsa! Quos odio quo esse fugit reiciendis.
      </p>
      <br />
      <p className="paragrafo2">
        E então... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
        deleniti porro aperiam modi quasi enim placeat voluptate et impedit
        atque facilis autem facere eaque quos minus pariatur, vel, explicabo
        itaque.
      </p>

      {/* CSS de Componentes */}
      <Component />
    </>
  );
}

export default App;
