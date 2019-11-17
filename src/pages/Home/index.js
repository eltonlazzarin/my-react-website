import React from "react";

import coder from "../../assets/coder.svg";
import designer from "../../assets/designer.svg";

import { Container, Coder } from "./styles";

export default function Home() {
  return (
    <Container>
      <div>
        <strong>#designer</strong>
        <p>
          UI/UX Designer with a passion for designing <br /> beautiful and
          functional <br /> user experiences.
        </p>
        <img src={designer} alt="Desiger"></img>
      </div>

      <Coder>
        <div>
          <strong>_coder /></strong>
          <p>
            Full stack developer who <br /> focuses on writing clean, elegant
            and efficient code.
          </p>
          <img src={coder} alt="code"></img>
        </div>
      </Coder>
    </Container>
  );
}
